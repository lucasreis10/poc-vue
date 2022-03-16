<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr data-test-table-movie="tr-row-header">
          <th> Name </th>
          <th> Genre </th>
          <th> Imdb Rating </th>
          <th> Duration </th>
          <th> Year </th>
        </tr>
        </thead>
        <tbody>
        <tr
          data-test-table-movie="tr-row-data"
          v-for="item in movies"
          :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.genre }}</td>
          <td>{{ item.imdbRating }}</td>
          <td>{{ item.duration }}</td>
          <td>{{ item.year }}</td>
          <td>
            <v-icon small class="mr-2" @click="editMovie(item)">mdi-pencil</v-icon>
          </td>
          <td>
            <v-icon small class="mr-2" @click="deleteMovie(item.id)">mdi-delete</v-icon>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: 'DataTableMovie',
  props: {
    movies: {
      type: Array,
      required: true,
    },
    deleteMovie: {
      type: Function,
      required: true,
    },
    editMovie: {
      type: Function,
      required: true,
    },
  },

};
</script>

<style scoped>

</style>
