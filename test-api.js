"const axios = require('axios');" 

const axios = require('axios');

// Test configuration
const BASE_URL = 'http://localhost:5000';
const testResults = [];

// Helper function to run tests
async function runTest(testName, testFunction) {
  console.log(`🧪 Running: ${testName}`);
  try {
    const result = await testFunction();
    testResults.push({
      name: testName,
      status: 'PASS',
      response: result
    });
    console.log(`✅ ${testName} - PASSED`);
  } catch (error) {
    testResults.push({
      name: testName,
      status: 'FAIL',
      error: error.message
    });
    console.log(`❌ ${testName} - FAILED: ${error.message}`);
  }
}

// Test functions
async function testHealthCheck() {
  const response = await axios.get(`${BASE_URL}/api/health`);
  return response.data;
}

async function testGetAllUsers() {
  const response = await axios.get(`${BASE_URL}/api/users`);
  return response.data;
}

async function testCreateUser() {
  const userData = {
    name: 'Test User',
    email: 'test@example.com'
  };
  const response = await axios.post(`${BASE_URL}/api/users`, userData);
  return response.data;
}

async function testGetUserById() {
  const response = await axios.get(`${BASE_URL}/api/users/1`);
  return response.data;
}

async function testUpdateUser() {
  const userData = {
    name: 'Updated User',
    email: 'updated@example.com'
  };
  const response = await axios.put(`${BASE_URL}/api/users/1`, userData);
  return response.data;
}

async function testGetAllProducts() {
  const response = await axios.get(`${BASE_URL}/api/products`);
  return response.data;
}

async function testCreateProduct() {
  const productData = {
    name: 'Test Product',
    price: 99.99
  };
  const response = await axios.post(`${BASE_URL}/api/products`, productData);
  return response.data;
}

async function testGetProductById() {
  const response = await axios.get(`${BASE_URL}/api/products/1`);
  return response.data;
}

async function testUpdateProduct() {
  const productData = {
    name: 'Updated Product',
    price: 149.99
  };
  const response = await axios.put(`${BASE_URL}/api/products/1`, productData);
  return response.data;
}

async function testGetAllOrders() {
  const response = await axios.get(`${BASE_URL}/api/orders`);
  return response.data;
}

async function testCreateOrder() {
  const orderData = {
    userId: 1,
    productId: 1,
    quantity: 2
  };
  const response = await axios.post(`${BASE_URL}/api/orders`, orderData);
  return response.data;
}

async function testGetOrderById() {
  const response = await axios.get(`${BASE_URL}/api/orders/1`);
  return response.data;
}

async function testUpdateOrder() {
  const orderData = {
    userId: 1,
    productId: 2,
    quantity: 3
  };
  const response = await axios.put(`${BASE_URL}/api/orders/1`, orderData);
  return response.data;
}

async function testGetAllCategories() {
  const response = await axios.get(`${BASE_URL}/api/categories`);
  return response.data;
}

async function testCreateCategory() {
  const categoryData = {
    name: 'Test Category'
  };
  const response = await axios.post(`${BASE_URL}/api/categories`, categoryData);
  return response.data;
}

async function testGetCategoryById() {
  const response = await axios.get(`${BASE_URL}/api/categories/1`);
  return response.data;
}

async function testUpdateCategory() {
  const categoryData = {
    name: 'Updated Category'
  };
  const response = await axios.put(`${BASE_URL}/api/categories/1`, categoryData);
  return response.data;
}

async function testErrorHandling() {
  try {
    await axios.get(`${BASE_URL}/api/users/999`);
    throw new Error('Expected 404 error');
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { status: 404, message: 'User not found' };
    }
    throw error;
  }
}

// Main test runner
async function runAllTests() {
  console.log('🚀 Starting API Tests for Shruti API Server');
  console.log('============================================');
  
  const startTime = Date.now();
  
  // Run all tests
  await runTest('Health Check', testHealthCheck);
  await runTest('Get All Users', testGetAllUsers);
  await runTest('Create User', testCreateUser);
  await runTest('Get User by ID', testGetUserById);
  await runTest('Update User', testUpdateUser);
  await runTest('Get All Products', testGetAllProducts);
  await runTest('Create Product', testCreateProduct);
  await runTest('Get Product by ID', testGetProductById);
  await runTest('Update Product', testUpdateProduct);
  await runTest('Get All Orders', testGetAllOrders);
  await runTest('Create Order', testCreateOrder);
  await runTest('Get Order by ID', testGetOrderById);
  await runTest('Update Order', testUpdateOrder);
  await runTest('Get All Categories', testGetAllCategories);
  await runTest('Create Category', testCreateCategory);
  await runTest('Get Category by ID', testGetCategoryById);
  await runTest('Update Category', testUpdateCategory);
  await runTest('Error Handling (404)', testErrorHandling);
  
  const endTime = Date.now();
  const totalTime = (endTime - startTime) / 1000;
  
  // Generate test report
  const passedTests = testResults.filter(test => test.status === 'PASS').length;
  const failedTests = testResults.filter(test => test.status === 'FAIL').length;
  const totalTests = testResults.length;
  const successRate = ((passedTests / totalTests) * 100).toFixed(2);
  
  console.log('\n📊 Test Report');
  console.log('==============');
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${passedTests}`);
  console.log(`Failed: ${failedTests}`);
  console.log(`Success Rate: ${successRate}%`);
  console.log(`Total Time: ${totalTime}s`);
  
  // Save test report to file
  const report = {
    summary: {
      total: totalTests,
      passed: passedTests,
      failed: failedTests,
      successRate: parseFloat(successRate),
      totalTime: totalTime
    },
    tests: testResults,
    timestamp: new Date().toISOString()
  };
  
  const fs = require('fs');
  fs.writeFileSync('test-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Test report saved to: test-report.json');
  
  // Display failed tests if any
  const failedTestResults = testResults.filter(test => test.status === 'FAIL');
  if (failedTestResults.length > 0) {
    console.log('\n❌ Failed Tests:');
    failedTestResults.forEach(test => {
      console.log(`  - ${test.name}: ${test.error}`);
    });
  }
  
  console.log('\n✅ API Testing completed!');
  console.log('============================================');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runAllTests().catch(console.error);
}

module.exports = { runAllTests, testResults }; 
