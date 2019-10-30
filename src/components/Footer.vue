<template>
  <div class="d-sm-flex justify-sm-space-between footer">
    <span class="footer-text caption text-left">
      Free under the
      <a
        href="https://creativecommons.org/licenses/by-nc/4.0/"
        target="_blank"
      >CC BY-NC 4.0</a> license
      <br />Based on personal research and interpretations, Chinese characters often have multiple meanings.
      <a href="https://github.com/chexplaind/chexplaindata" target="_blank">Contribute here.</a>
    </span>
    <p class="footer-text caption">
      <img class="tinyIcon" src="https://chexplaindata.blob.core.windows.net/icons/logo_gram.svg" />
      &nbsp;&copy; 2019 - {{ new Date().getFullYear() }}
      <a
        href="https://dtylam.github.io"
        target="_blank"
      >@dtylam</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
}

.footer-text {
  margin: 12px;
}

.tinyIcon {
  height: 3.5em;
  vertical-align: middle;
}
</style>