def remote = [:]
remote.name = 'docker'
remote.host = '185-227-110-33.cloud-xip.com'
remote.user = 'root'
remote.password = 'D3struction971'
remote.allowAnyHosts = true

pipeline {
    agent any
    tools {
        maven 'Maven 3.9.2'
    }
    stages {
        stage('maven build') {
            steps {
                bat 'mvn clean package -Dmaven.test.skip'
            }
        }
        stage('build_image') {
            steps {
                script {
                    sshPut remote: remote, from: 'target/MisterFly.jar', into: './misterfly'
                    sshPut remote: remote, from: 'Dockerfile', into: './misterfly'
                    sshCommand remote: remote, command: "docker build -f ~/misterfly/Dockerfile -t misterfly:latest ~/misterfly"
                    echo 'image build OK '
                }
            }
        }
        stage('execution') {
            steps {
                script {
                    try {
                        sshCommand remote: remote, command: "docker stop MisterFly"
                        sshCommand remote: remote, command: "docker rm MisterFly"
                    } catch(Exception e) {
                        echo "non trouvé"
                    }
                    sshCommand remote: remote, command: "echo \$DISCORD_TOKEN"
                    sshCommand remote: remote, command: "docker run --name MisterFly -d -e DISCORD_TOKEN=\$MISTERFLY_TOKEN -e SPRING_DATASOURCE_URL=\$DB_URL -e SPRING_DATASOURCE_USERNAME=\$DB_USERNAME -e SPRING_DATASOURCE_PASSWORD=\$DB_PASSWORD -p 2002:8080 misterfly:latest MisterFly.jar"
                }
            }
        }
    }
}
