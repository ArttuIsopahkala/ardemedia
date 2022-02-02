<script lang="ts">
  export let title: string = '';
  export let desc: string = '';
  export let techTitle: string = '';
  export let techText: string = '';
</script>

<div class="flex flex-col lg:max-w-md py-5 w-full md:w-[calc(50%-20px)]">
  <div class="flex flex-row justify-between items-center">
    <h4>{title}</h4>
    <div class="mx-3 w-[20px] h-[20px] md:w-[30px] md:h-[30px] flex items-center justify-center">
      <slot name="icon">
        <!-- <FaCode /> -->
      </slot>
    </div>
  </div>
  <p class="py-3">
    {desc}
  </p>
  <h5 class="text-primary">{techTitle}</h5>
  <span>{techText}</span>
</div>
