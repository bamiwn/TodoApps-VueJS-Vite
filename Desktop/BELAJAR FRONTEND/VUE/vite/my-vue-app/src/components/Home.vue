<template>
  <div class="container">
    <h1 class="text-center">{{ title }}</h1>

    <select v-model="fruits" multiple class="form-control">
      <option value="manggo">Manggo</option>
      <option value="banana">Banana</option>
      <option value="avocado">Avocado</option>
    </select>

    <pre>
      <!-- {{ JSON.stringify(fruits) }} -->
    </pre>
    <code>CTRL + select</code>
    <p>Join Fruits: {{ joinFruits() }}</p>
    <!-- <p>Callback: {{ coba() }}</p> -->

    <img src="https://avatars.dicebear.com/api/male/john.svg" />
  </div>

  <ul v-for="m in mhs">
    <li></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      title: 'Home Page',
      author: 'Bamiwn',
      fruits: [],
      mhs: [
        {
          id: 1,
          nama: 'Bambang Irawan',
          nim: 151911513001,
          prodi: 'Sistem Informasi',
          fakultas: 'Vokasi',
          statusMhs: true,
        },
        {
          id: 2,
          nama: 'Indra',
          nim: 151911513921,
          prodi: 'Teknik Industri',
          fakultas: 'Teknologi Industri',
          statusMhs: true,
        },
        {
          id: 3,
          nama: 'Yofi',
          nim: 151911513212,
          prodi: 'Teknik Fiska',
          fakultas: 'Sains',
          statusMhs: true,
        },
      ],
    };
  },
  methods: {
    joinFruits() {
      return this.fruits.join(' - ');
    },
    coba(callback) {
      return callback(...strings);
    },
  },
  computed: {},
  mounted() {
    this.mhs = [];
  },
};
</script>

<style>
img {
  width: 30px;
  height: 30px;
}
</style>
