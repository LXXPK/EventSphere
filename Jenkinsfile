pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'event-sphere-app'
        REGISTRY_URL = 'yourdockerhubusername/event-sphere-app' // Set this to your Docker Hub repository
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository from GitHub
                git 'https://github.com/LXXPK/EventSphere.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // For React frontend
                    dir('user') {
                        bat 'npm install'
                    }
                    // For Node.js backend
                    dir('server') {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    // Build React frontend (npm run build is commonly used)
                    dir('user') {
                        bat 'npm run build'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run React frontend tests
                    dir('user') {
                        bat 'npm test -- --coverage'
                    }
                    // Run Node.js backend tests
                    dir('server') {
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Docker build and tag for the React app and Node.js backend
                    bat 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                script {
                    // Login to DockerHub and push the image (Docker Hub credentials are needed)
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        bat "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
                        bat "docker push $REGISTRY_URL"
                    }
                }
            }
        }

        stage('Deploy to Environment') {
            steps {
                script {
                    // Use Docker Compose to deploy the containers
                    bat "docker-compose -f $DOCKER_COMPOSE_FILE up -d"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline complete!'
        }
        success {
            echo 'Build was successful.'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
