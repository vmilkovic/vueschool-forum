<template>
  <div class="container">
      <div class="col-full push-top">

          <div class="forum-header">
              <div class="forum-details">
                  <h1>{{ forum.name }}</h1>
                  <p class="text-lead">{{ forum.description }}</p>
              </div>
              <a href="#" class="btn-green btn-small">Start a thread</a>
          </div>
      </div>

      <div class="col-full push-top">

        <ThreadList :threads="threads"/>

      </div>

  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'
export default {
  components: { ThreadList },
  props: {
    id: {
      required: true,
      tpye: String
    }
  },
  computed: {
    forum () {
      console.log(this.$store.state)
      return this.$store.state.forums.find(forum => forum.id === this.id)
    },
    threads () {
      return this.$store.state.threads.filter(thread => thread.forumId === this.id)
    }
  }
}
</script>

<style>

</style>
