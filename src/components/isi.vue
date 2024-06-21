<template>
    <div>
      <h2>Formulir Input Data</h2>
      <form @submit.prevent="addPerson">
        <input v-model="newPerson.name" placeholder="Nama" />
        <input v-model="newPerson.birthDate" placeholder="Tanggal Lahir" type="date" />
        <input v-model="newPerson.age" placeholder="Umur" type="number" />
        <input v-model="newPerson.address" placeholder="Alamat" />
        <button type="submit">Tambahkan</button>
      </form>
  
      <h2>Daftar Nama</h2>
      <ul>
        <li v-for="(person, index) in people" :key="index">
          {{ person.name }} - {{ person.birthDate }} - {{ person.age }} - {{ person.address }}
          <button @click="editPerson(index)">Edit</button>
          <button @click="deletePerson(index)">Hapus</button>
        </li>
      </ul>
    </div>
  
    <Foter />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Foter from './footer.vue';
  
  const people = ref([]);
  const newPerson = ref({
    name: '',
    birthDate: '',
    age: null,
    address: ''
  });
  const editIndex = ref(-1);
  
  const addPerson = () => {
    if (editIndex.value === -1) {
      people.value.push({ ...newPerson.value });
    } else {
      people.value.splice(editIndex.value, 1, { ...newPerson.value });
      editIndex.value = -1;
    }
    resetForm();
  };
  
  const deletePerson = (index) => {
    people.value.splice(index, 1);
  };
  
  const editPerson = (index) => {
    newPerson.value = { ...people.value[index] };
    editIndex.value = index;
  };
  
  const resetForm = () => {
    newPerson.value = { name: '', birthDate: '', age: null, address: '' };
  };
  </script>
  
    <style setup>
    /* Gaya Umum */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7f6;
    margin: 0;
    padding: 0;
  }
  
  /* Gaya Formulir */
  form {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }
  
  input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #5cb85c;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #4cae4c;
  }
  
  /* Gaya Daftar Nama */
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    background-color: #ffffff;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  li button {
    background-color: #d9534f;
    margin-left: 1rem;
  }
  
  li button:first-of-type {
    background-color: #f0ad4e;
  }
  
  li button:hover {
    opacity: 0.9;
  }
  
    </style>
    