import React from 'react';

export class Storage {
    constructor(storageName = 'gameScoreboard', initialValue = '[]') {
      this.storageName = storageName
      console.log('storage=',storageName)
      if (!localStorage.getItem(storageName)) {
             
        localStorage.setItem(storageName, initialValue)
      }
    }
  
      // Load data from previous games from localStorage
    getData() {
      return JSON.parse(localStorage.getItem(this.storageName))
    }
  
      // Update data in localStorage
      update(data) {
      localStorage.setItem(this.storageName, JSON.stringify(data))
    }
  }
export default Storage;