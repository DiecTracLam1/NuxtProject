<template>
  <div>
    <div class="bg-[#f3f2ee]">
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto"
      >
        <div class="grid grid-cols-12 sm:gap-x-[30px] gap-y-[30px]">
          <div class="col-span-2"></div>
          <div class="col-span-8 w-50 ml-auto">
            <div class="pt-[125px] py-[190px] text-center">
              <h2 class="font-bold text-[42px] mb-[18px]">
                {{ blogDetail?.data.blog.title }}
              </h2>
              <ul class="flex text-normal-color text-normal justify-center">
                <li
                  class="relative mr-10 after:absolute after:h-4 after:w-[1px] after:bg-blur-grey after:top-1/2 after:-translate-y-1/2 after:-right-4"
                >
                  By {{ blogDetail?.data.author.fullname }}
                </li>

                <li
                  class="relative mr-10 after:absolute after:h-4 after:w-[1px] after:bg-blur-grey after:top-1/2 after:-translate-y-1/2 after:-right-4"
                >
                  {{
                    $dayjs(blogDetail?.data.blog.updatedAt).format(
                      "MMMM D , YYYY"
                    )
                  }}
                </li>

                <li>8 Comments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[-115px]">
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto"
      >
        <div class="grid grid-cols-12 sm:gap-x-[30px] gap-y-[30px]">
          <div class="col-span-12">
            <div class="h-[580px]">
              <img
                :src="blogDetail?.data.blog.titleImage"
                class="h-full w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[60px]">
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] w-full px-[15px] mx-auto"
      >
        <div class="grid grid-cols-12 sm:gap-x-[30px] gap-y-[30px]">
          <div class="md:col-span-2 col-span-12">
            <div class="flex flex-col items-center">
              <span class="font-semibold text-xl">SHARE</span>
              <ul class="flex md:flex-col mt-[30px] items-center">
                <li class="md:mb-4 md:mx-0 ml-4">
                  <NuxtLink to="https://www.facebook.com/"
                    ><Icon
                      name="entypo-social:facebook-with-circle"
                      class="text-[42px] text-blue-600"
                  /></NuxtLink>
                </li>

                <li class="md:mb-4 md:mx-0 ml-4">
                  <NuxtLink to="https://twitter.com/"
                    ><Icon
                      name="entypo-social:twitter-with-circle"
                      class="text-[42px]"
                  /></NuxtLink>
                </li>

                <li class="md:mb-4 md:mx-0 ml-4">
                  <NuxtLink to="https://www.youtube.com/"
                    ><Icon
                      name="entypo-social:youtube-with-circle"
                      class="text-[42px] text-red-600"
                  /></NuxtLink>
                </li>

                <li class="md:mb-4 md:mx-0 ml-4">
                  <NuxtLink to="https://www.linkedin.com/"
                    ><Icon
                      name="entypo-social:linkedin-with-circle"
                      class="text-[42px] text-blue-400"
                  /></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:col-span-8 col-span-12">
            <div>
              <template
                v-for="description in blogDetail?.data.blog.description"
              >
                <p
                  
                  v-if="description.type === 'content'"
                  class="leading-[34px] text-lg text-normal-color"
                >
                  <span v-html="description.content"></span>
                </p>

                <!-- <h2 v-else-if="description.type === 'title'" class=""></h2>

                <div v-else-if="description.type === 'image'" class="my-4">
                  <img :src="description.content" class="mx-auto" alt="" />
                </div>

                <div
                  v-else-if="description.type === 'quote'"
                  class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"
                >
                  <span
                    class="absolute bg-red-500 -top-6 left-10 px-4 py-[14px] rounded-full"
                  >
                    <Icon
                      name="ooui:quotes-ltr"
                      class="font-bold text-white text-lg"
                    />
                  </span>
                  <h4 class="font-semibold text-lg">
                    “{{ description.content }}”
                  </h4>
                </div> -->
              </template>
            </div>

            <div class="my-[50px] pt-[15px] border-t-[1px]">
              <div class="grid grid-cols-12 sm:gap-x-[30px] gap-y-[30px]">
                <div class="xs:col-span-6 col-span-12">
                  <div
                    class="flex items-center xs:justify-start justify-center"
                  >
                    <div class="h-[46px] mr-[15px]">
                      <img
                        class="w-full h-full rounded-full"
                        :src="blogDetail?.data.author.profileImage"
                        alt=""
                      />
                    </div>
                    <p class="font-semibold text-lg m-0">
                      {{ blogDetail?.data.author.fullname }}
                    </p>
                  </div>
                </div>
                <div class="xs:col-span-6 col-span-12">
                  <ul
                    class="flex xs:justify-end justify-center ml-auto text-base font-bold"
                  >
                    <li class="mr-[10px]">#Fashion</li>
                    <li class="mr-[10px]">#Trending</li>
                    <li>
                      #{{
                        $dayjs(blogDetail?.data.blog.updatedAt).format("YYYY")
                      }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mb-[30px]">
              <div class="grid grid-cols-12 sm:gap-x-[30px] gap-y-[30px]">
                <div class="sm:col-span-6 col-span-12">
                  <div
                    v-if="blogSide?.data.prevBlog?.id"
                    class="border-[1px] cursor-pointer group p-[30px]"
                    @click="onRedirect(blogSide?.data.prevBlog?.id)"
                  >
                    <div
                      class="flex items-center text-blur-grey mb-[10px] group-hover:text-blue-400"
                    >
                      <Icon name="solar:arrow-left-outline" class="text-xl" />
                      <p class="m-0 ml-[5px] text-normal">Previous Pod</p>
                    </div>
                    <h4 class="font-bold text-xl m-0">
                      {{ blogSide?.data.prevBlog?.title }}
                    </h4>
                  </div>
                </div>

                <div class="sm:col-span-6 col-span-12">
                  <div
                    v-if="blogSide?.data.nextBlog?.id"
                    class="border-[1px] cursor-pointer group p-[30px] text-end"
                    @click="onRedirect(blogSide?.data.nextBlog?.id)"
                  >
                    <div
                      class="flex items-center w-fit text-blur-grey mb-[10px] ml-auto group-hover:text-blue-400"
                    >
                      <p class="m-0 mr-[5px] text-normal">Next Pod</p>
                      <Icon name="solar:arrow-right-outline" class="text-xl" />
                    </div>
                    <h4 class="font-bold text-xl m-0">
                      {{ blogSide?.data.nextBlog?.title }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { BlogDetailApi } from "model/blog";

const route = useRoute();
const { data: blogDetail } = await useFetch<BlogDetailApi>(
  `/api/blog/${route.params.id}`
);

const { data: blogSide } = await useFetch(
  `/api/blog/nextPrev?id=${route.params.id}`
);

const onRedirect = (id: string) => {
  navigateTo({
    path: `/blog/${id}`,
  });
};
</script>
