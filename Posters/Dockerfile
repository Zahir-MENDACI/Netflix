FROM openjdk:17

LABEL maintainer="Younes"

ADD target/posters-0.0.1-SNAPSHOT.jar posters-docker.jar

EXPOSE 8080

CMD ["java", "-jar", "posters-docker.jar"]