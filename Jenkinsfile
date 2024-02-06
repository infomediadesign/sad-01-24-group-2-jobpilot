
pipeline {
    agent any
   

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
                    withCredentials([string(credentialsId: 'heroku-api-key', variable: 'HEROKU_API_KEY')]) {
                       bat '"C:\\Program Files\\Heroku\\bin\\heroku" version' 
                       bat '"C:\\Program Files\\Heroku\\bin\\heroku" login -i'
                    }
                }
            }
        }
       
    }
}
