<template>
    <div>
      <h4>{{blogData[$route.params.id].title}}</h4>
      <h4>{{blogData[$route.params.id].content}}</h4>
      <h4>{{blogData[$route.params.id].date}}</h4>
      <h4>{{blogData[$route.params.id].number}}</h4>
    </div>
</template>

<script>
export default {
    name : 'Detail',
    props : {
        blogData : Array,
    },
}
</script>

<style>

</style>