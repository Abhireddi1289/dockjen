pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('abhireddi1289/my-docker-image')
        IMAGE_NAME = "Devxpace"
        VERSION = "1.0"
        FULL_IMAGE_NAME = "${abhireddi1289}/${IMAGE_NAME}:1"
    }

    stages {
        stage('Build') {
            steps {
                sh 'sudo docker build -t $FULL_IMAGE_NAME docker/app2/'
            }
        }
        stage('Login') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'abhireddi1289/my-docker-image', usernameVariable: 'abhireddi1289', passwordVariable: '9700@Abhi')]) {
                        sh "docker login -u abhireddi1289 -p 9700@Abhi"
                    }
                }
            }
        }
        stage('Push') {
            steps {
                sh 'docker push Devxpace'
            }
        }
        stage('Remove') {
            steps {
                sh 'docker rmi Devxpace'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
