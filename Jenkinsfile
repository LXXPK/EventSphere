pipeline {
    agent any
    stages {
        stage('Build Backend') {
            steps {
                script {
                    // Install dependencies and build the backend
                    sh 'cd server && npm install'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    // Install dependencies and build the frontend
                    sh 'cd user && npm install && npm run build'
                }
            }
        }
        stage('Test Backend') {
            steps {
                script {
                    // Run backend tests
                    sh 'cd server && npm test'
                }
            }
        }
        stage('Test Frontend') {
            steps {
                script {
                    // Run frontend tests
                    sh 'cd user && npm test'
                }
            }
        }
    }
}
