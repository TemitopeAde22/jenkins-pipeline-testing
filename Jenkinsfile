pipeline {
    agent any

    tools {
        nodejs "Nodejs" // Ensure Node.js is configured in Jenkins
    }

    stages {
        stage('Hello world') {
            steps {
                sh "echo Hello world"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
     
        success {
            echo 'Build and tests completed successfully!'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}
