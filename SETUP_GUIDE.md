# 🚀 Shruti API Server - Setup Guide

This guide will help you set up API testing with Keploy and integrate it into your CI/CD pipeline.

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- GitHub account (for CI/CD)
- Keploy account (for API testing)

## 🛠️ Step 1: Project Setup

### 1.1 Install Dependencies
```bash
npm install
```

### 1.2 Start the API Server
```bash
npm start
```

The server will run on `http://localhost:5000`

## 🧪 Step 2: API Testing Setup

### 2.1 Install Keploy
```bash
# Install Keploy CLI
curl -sL https://get.keploy.io | bash

# Add to PATH
export PATH=$PATH:$HOME/.keploy/bin

# Verify installation
keploy --version
```

### 2.2 Get Keploy API Key
1. Sign up at [Keploy](https://keploy.io)
2. Navigate to your dashboard
3. Generate an API key
4. Set environment variables:
```bash
export KEPLOY_API_KEY="your-keploy-api-key"
export KEPLOY_SERVER_URL="https://api.keploy.io"
```

### 2.3 Run API Tests

#### Option A: Using the Test Script
```bash
# Run the Node.js test script
npm run test:api
```

#### Option B: Using Curl Commands
```bash
# Make the script executable
chmod +x ./api-test-commands.sh

# Run the curl commands
./api-test-commands.sh
```

#### Option C: Using Keploy Configuration
```bash
# Run tests with Keploy configuration
keploy test --config keploy.yaml
```

### 2.4 View Test Reports
```bash
# Open the HTML report
open generate-report.html
# or
start generate-report.html  # Windows
```

## 🔄 Step 3: CI/CD Integration

### 3.1 GitHub Repository Setup
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit with API testing setup"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 3.2 GitHub Secrets Configuration
1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `KEPLOY_API_KEY`: Your Keploy API key
   - `KEPLOY_SERVER_URL`: `https://api.keploy.io`

### 3.3 Trigger CI/CD Pipeline
```bash
# Make any change and push to trigger the pipeline
git add .
git commit -m "Trigger CI/CD pipeline"
git push origin main
```

## 📊 Step 4: Monitoring and Reports

### 4.1 GitHub Actions Dashboard
- Go to your repository on GitHub
- Click on the "Actions" tab
- Monitor the CI/CD pipeline execution

### 4.2 Test Results
The pipeline will:
- Run unit tests with Jest
- Execute API tests with Keploy
- Generate test reports
- Comment on pull requests with results

### 4.3 Local Test Reports
After running tests locally, you can find:
- `test-report.json` - Detailed test results
- `generate-report.html` - Visual test report
- `coverage/` - Jest coverage reports

## 🔧 Step 5: Configuration Files

### 5.1 OpenAPI Schema (`openapi.yaml`)
- Complete API documentation
- Defines all endpoints, request/response schemas
- Used by Keploy for test generation

### 5.2 Keploy Configuration (`keploy.yaml`)
- Test scenarios and expectations
- Performance settings
- Validation rules

### 5.3 GitHub Actions (`.github/workflows/ci-cd.yml`)
- CI/CD pipeline definition
- Test execution steps
- Deployment configuration

## 🚀 Step 6: Testing Your Setup

### 6.1 Verify API Server
```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Expected response:
{
  "status": "OK",
  "message": "Shruti API Server is running!",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "database": "Connected"
}
```

### 6.2 Run Complete Test Suite
```bash
# Run all tests
npm test

# Run API tests
npm run test:api

# Run with coverage
npm run test:coverage
```

### 6.3 Verify CI/CD Pipeline
1. Make a small change to your code
2. Commit and push to GitHub
3. Check the Actions tab for pipeline execution
4. Verify test results in the pipeline logs

## 📝 Step 7: Customization

### 7.1 Adding New API Endpoints
1. Add the endpoint to your Express routes
2. Update `openapi.yaml` with the new endpoint
3. Add test cases to `keploy.yaml`
4. Update `api-test-commands.sh` with curl commands

### 7.2 Modifying Test Configuration
- Edit `keploy.yaml` for test scenarios
- Modify `test-api.js` for custom test logic
- Update GitHub Actions workflow as needed

### 7.3 Environment-Specific Settings
- Development: `http://localhost:5000`
- Staging: Your staging server URL
- Production: Your production server URL

## 🐛 Troubleshooting

### Common Issues

#### 1. Keploy Installation Issues
```bash
# If curl installation fails, try:
wget -O - https://get.keploy.io | bash
```

#### 2. API Server Not Starting
```bash
# Check if port 5000 is available
lsof -i :5000

# Kill process if needed
kill -9 <PID>
```

#### 3. Test Failures
- Check if API server is running
- Verify endpoint URLs in test files
- Check network connectivity
- Review error messages in test output

#### 4. CI/CD Pipeline Failures
- Verify GitHub secrets are set correctly
- Check Keploy API key validity
- Review pipeline logs for specific errors
- Ensure all dependencies are installed

### Getting Help
- Check the [Keploy Documentation](https://docs.keploy.io/)
- Review GitHub Actions logs
- Check test output for specific error messages
- Verify all configuration files are properly formatted

## 🎉 Success Criteria

Your setup is complete when:
- ✅ API server starts without errors
- ✅ All unit tests pass (`npm test`)
- ✅ API tests pass (`npm run test:api`)
- ✅ CI/CD pipeline runs successfully
- ✅ Test reports are generated
- ✅ Keploy integration is working

## 📚 Additional Resources

- [Keploy Documentation](https://docs.keploy.io/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Jest Testing Framework](https://jestjs.io/)
- [Express.js](https://expressjs.com/)

---

**Note:** This setup provides a comprehensive API testing solution with AI-powered testing capabilities. The CI/CD pipeline ensures that all changes are automatically tested before deployment. 