#!/bin/bash

# Shruti API Server Test Commands
# Base URL
BASE_URL="http://localhost:5000"

echo "🚀 Starting API Tests for Shruti API Server"
echo "=============================================="

# Test 1: Root endpoint
echo "📋 Test 1: Root endpoint"
curl -X GET "$BASE_URL/" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 2: Health check
echo "🏥 Test 2: Health check"
curl -X GET "$BASE_URL/api/health" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 3: API Documentation
echo "📚 Test 3: API Documentation"
curl -X GET "$BASE_URL/api/docs" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 4: Get all users
echo "👥 Test 4: Get all users"
curl -X GET "$BASE_URL/api/users" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 5: Create a new user
echo "➕ Test 5: Create a new user"
curl -X POST "$BASE_URL/api/users" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com"
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 6: Get user by ID
echo "🔍 Test 6: Get user by ID"
curl -X GET "$BASE_URL/api/users/1" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 7: Update user
echo "✏️ Test 7: Update user"
curl -X PUT "$BASE_URL/api/users/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "email": "john.smith@example.com"
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 8: Get all products
echo "📦 Test 8: Get all products"
curl -X GET "$BASE_URL/api/products" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 9: Create a new product
echo "➕ Test 9: Create a new product"
curl -X POST "$BASE_URL/api/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Smartphone",
    "price": 799.99
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 10: Get product by ID
echo "🔍 Test 10: Get product by ID"
curl -X GET "$BASE_URL/api/products/1" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 11: Update product
echo "✏️ Test 11: Update product"
curl -X PUT "$BASE_URL/api/products/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gaming Laptop",
    "price": 1299.99
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 12: Get all orders
echo "📋 Test 12: Get all orders"
curl -X GET "$BASE_URL/api/orders" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 13: Create a new order
echo "➕ Test 13: Create a new order"
curl -X POST "$BASE_URL/api/orders" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "productId": 1,
    "quantity": 2
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 14: Get order by ID
echo "🔍 Test 14: Get order by ID"
curl -X GET "$BASE_URL/api/orders/1" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 15: Update order
echo "✏️ Test 15: Update order"
curl -X PUT "$BASE_URL/api/orders/1" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "productId": 2,
    "quantity": 3
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 16: Get all categories
echo "📂 Test 16: Get all categories"
curl -X GET "$BASE_URL/api/categories" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 17: Create a new category
echo "➕ Test 17: Create a new category"
curl -X POST "$BASE_URL/api/categories" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Clothing"
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 18: Get category by ID
echo "🔍 Test 18: Get category by ID"
curl -X GET "$BASE_URL/api/categories/1" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 19: Update category
echo "✏️ Test 19: Update category"
curl -X PUT "$BASE_URL/api/categories/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Electronics & Gadgets"
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 20: Error handling - Get non-existent user
echo "❌ Test 20: Error handling - Get non-existent user"
curl -X GET "$BASE_URL/api/users/999" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 21: Error handling - Invalid JSON
echo "❌ Test 21: Error handling - Invalid JSON"
curl -X POST "$BASE_URL/api/users" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Invalid User",
    "email": "invalid-email"
  }' \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

# Test 22: Delete operations
echo "🗑️ Test 22: Delete user"
curl -X DELETE "$BASE_URL/api/users/1" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

echo "🗑️ Test 23: Delete product"
curl -X DELETE "$BASE_URL/api/products/1" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

echo "🗑️ Test 24: Delete order"
curl -X DELETE "$BASE_URL/api/orders/1" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

echo "🗑️ Test 25: Delete category"
curl -X DELETE "$BASE_URL/api/categories/1" \
  -H "Content-Type: application/json" \
  -w "\nStatus: %{http_code}\nTime: %{time_total}s\n"

echo -e "\n"

echo "✅ API Testing completed!"
echo "==============================================" 
