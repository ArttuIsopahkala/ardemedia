<script lang="ts">
  export let title: string = '';
  export let desc: string = '';
</script>

<div class="flex flex-col lg:max-w-md py-5 w-full md:w-[calc(50%-20px)]">
  <div class="flex flex-row justify-between items-center">
    <h3 class="">{title}</h3>
    <div class="mx-3 w-[20px] h-[20px] md:w-[30px] md:h-[30px] flex items-center justify-center">
      <slot name="icon">
        <!-- <FaCode /> -->
      </slot>
    </div>
  </div>
  <p class="py-3">
    {desc}
  </p>
  <slot name="techs" />
  <div class="mt-2">
    <slot name="proof" />
  </div>
</div>
