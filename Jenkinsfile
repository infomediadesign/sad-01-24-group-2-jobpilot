
pipeline {
    agent any
   
   environment {
        HEROKU_API_KEY = credentials('heroku-api-key')
    }

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    def herokuCredentials = credentials('heroku-api-key')
                    withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: herokuCredentials.id, usernameVariable: 'HEROKU_USERNAME', passwordVariable: 'HEROKU_API_KEY']]) {
                        sh 'heroku login -i'
                       
                    }

                }
            }
        }
       
    }
}
