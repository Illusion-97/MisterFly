FROM timbru31/java-node:21-jre-20

ADD MisterFly.jar MisterFly.jar
ENTRYPOINT ["java", "-jar","MisterFly.jar"]
EXPOSE 8080
