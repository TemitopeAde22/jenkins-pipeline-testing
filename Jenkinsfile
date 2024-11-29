pipeline {
    agent any

    tools {
        nodejs "Nodejs_12.22.9" // Ensure Node.js is configured in Jenkins
    }

    stages {
        stage('Hello world') {
            steps {
                sh "echo Hello world"
            }
        }
        stage('Install Node.js') {
    steps {
        sh '''
            curl -fsSL https://deb.nodesource.com/setup_12.x | bash -
            apt-get install -y nodejs
        '''
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
