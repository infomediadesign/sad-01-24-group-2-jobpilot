
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
             withCredentials([string(credentialsId: 'heroku-api-key', variable: 'HEROKU_API_KEY')]) {
                def herokuCliPath= "C:\\Program Files\\heroku\\bin\\heroku"
                        bat '${herokuCliPath} login -i'
                    }
            }
        }
       
    }
}
