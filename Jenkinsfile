pipeline {
    agent any
    stages {
        stage('Build Backend') {
            steps {
                script {
                    // Install dependencies and build the backend
                    bat 'cd server && npm install'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    // Install dependencies and build the frontend
                    bat 'cd user && npm install && npm run build'
                }
            }
        }
        stage('Test Backend') {
            steps {
                script {
                    // Run backend tests
                    bat 'cd server && npm test'
                }
            }
        }
        stage('Test Frontend') {
            steps {
                script {
                    // Run frontend tests
                    bat 'cd user && npm test'
                }
            }
        }
    }
}
