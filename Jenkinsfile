
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
                    
                 def git = nodeGit 'origin'

          // Checkout the online-auth-service-deployment branch
          git.checkout branch: 'online-auth-service-deployment'

          // Push to the remote with verbose output
          git.push withMessage('Jenkins pipeline deployment', verbose: true)
                      
                    
                     

                }
            }
        }
       
    }
}
