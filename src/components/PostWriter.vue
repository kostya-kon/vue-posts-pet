<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">Post Title</div>
        <input type="text" class="input" v-model="title" />
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <div contenteditable ref="contentEditable" @input="handleInput" />
    </div>
    <div class="column">
      <div v-html="html"></div>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <button class="button is-primary is-pulled-right" @click="handleClick">Save Post</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TimelinePost } from "../posts";
import { ref, onMounted, watch } from "vue";
import { marked } from "marked";
import highlightjs from "highlight.js";
import { debounce } from "lodash";
import { usePosts } from '../stores/posts'
import { useRouter } from 'vue-router'

const props = defineProps<{
  post: TimelinePost;
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown);
const html = ref("");
const contentEditable = ref<HTMLDivElement>();
const post = usePosts();
const router = useRouter();

function parseHtml(markdown: string) {
  marked.parse(
    markdown,
    {
      gfm: true,
      breaks: true,
      highlight: (code) => {
        return highlightjs.highlightAuto(code).value;
      },
    },
    (_, parseResult) => {
      html.value = parseResult;
    }
  );
}

watch(
  content,
  debounce(parseHtml, 250),
  {
    immediate: true,
  }
);

onMounted(() => {
  if (!contentEditable.value) {
    throw new Error("ContentEditable DOM node was not found");
  }
  contentEditable.value.innerText = content.value;
});

function handleInput() {
  if (!contentEditable.value) {
    throw new Error("ContentEditable DOM node was not found");
  }
  content.value = contentEditable.value.innerText;
}

function handleClick() {
  const newPost: TimelinePost = {
    ...props.post,
    title: title.value,
    markdown: content.value,
    html: html.value
  }
  post.createPost(newPost);
  router.push('/');
}
</script>

<style scoped></style>
