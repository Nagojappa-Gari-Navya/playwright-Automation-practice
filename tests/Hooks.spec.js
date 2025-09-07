import { test, expect } from '@playwright/test';

test.describe('verify payment using diff methods', async ( ) => {
    test.beforeAll(()=>{
        console.log("before all tests")
    })
    test.beforeEach(()=>{
        console.log("launch the url")
        console.log("login")
        console.log("search the product")
        console.log("add the product to card")
        console.log("select the delivery address")

    })
    test.afterEach(()=>{
        console.log("cansel the order")
    })
     test.afterAll(()=>{
        console.log("after all tests")
    })
    test('Verify user can do payment with debit card',async({page}) => {
       
        console.log("do the payment with debit card")
        console.log("order success")

    })
     test('Verify user can do payment with credit card',async({page}) => {
      
        console.log("do the payment with credit card")
        console.log("order success")

    })
     test('Verify user can do payment with UPI',async({page}) => {
        
        console.log("do the payment with UPI")
        console.log("order success")

    })
     test('Verify user can do payment with net banking',async({page}) => {
       
        console.log("do the payment with net banking")
        console.log("order success")

    })

    })
