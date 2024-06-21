import { connect } from 'mongoose'
import React from 'react'

const url = 

const dbConfig = async() => {
  
    try {
       await connect(url).then(() => {
        console.log("database connection established")
       })
    } catch (error) {
        return console.error(error)
    }
}

export default dbConfig
