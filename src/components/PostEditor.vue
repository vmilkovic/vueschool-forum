<template>
  <div class="col-full">
      <form @submit.prevent="save">
        <div class="form-group">
          <textarea v-model="text" class="form-input" name="content" rows="10" cols="30"></textarea>
        </div>
        <div class="form-actions">
          <button class="btn btn-blue">Submit post</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
      }
      this.$emit('save', { post })

      this.text = ''
    }
  }
}
</script>
