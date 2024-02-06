
pipeline {
    agent any
   
     environment {
        HEROKU_API_KEY = credentials('68c380ec-71da-4984-a54b-f3ca05802458')
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
                       bat '"C:\\Program Files\\Heroku\\bin\\heroku" version' 
                       bat '"C:\\Program Files\\Heroku\\bin\\heroku" login -i'           
                }
            }
        }
       
    }
}
