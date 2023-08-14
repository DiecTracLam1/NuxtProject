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
            <div
              class="leading-[34px] text-lg text-normal-color"
              v-dompurify-html="description"
              v-lazy-container="{ selector: 'img' }"
            ></div>

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
                    v-if="blogDetail?.data.prevBlog?.id"
                    class="border-[1px] cursor-pointer group p-[30px]"
                    @click="onRedirect(blogDetail?.data.prevBlog?.id)"
                  >
                    <div
                      class="flex items-center text-blur-grey mb-[10px] group-hover:text-blue-400"
                    >
                      <Icon name="solar:arrow-left-outline" class="text-xl" />
                      <p class="m-0 ml-[5px] text-normal">Previous Pod</p>
                    </div>
                    <h4 class="font-bold text-xl m-0">
                      {{ blogDetail?.data.prevBlog?.title }}
                    </h4>
                  </div>
                </div>

                <div class="sm:col-span-6 col-span-12">
                  <div
                    v-if="blogDetail?.data.nextBlog?.id"
                    class="border-[1px] cursor-pointer group p-[30px] text-end"
                    @click="onRedirect(blogDetail?.data.nextBlog?.id)"
                  >
                    <div
                      class="flex items-center w-fit text-blur-grey mb-[10px] ml-auto group-hover:text-blue-400"
                    >
                      <p class="m-0 mr-[5px] text-normal">Next Pod</p>
                      <Icon name="solar:arrow-right-outline" class="text-xl" />
                    </div>
                    <h4 class="font-bold text-xl m-0">
                      {{ blogDetail?.data.nextBlog?.title }}
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

const description = `<p class="leading-[34px] text-lg text-normal-color">Tessa Hadley’s latest novel Free Love is now out in paperback! Read our interview with the author here, and enter our exclusive competition to win a bundle of Penguin Books and a £100 Joanie voucher.</p><p class="leading-[34px] text-lg text-normal-color">We sat down with the bestselling author of three collections of short stories and eight novels, including Late in the Day and The Past, to discuss the inspirations behind Free Love, writing advice and some book recommendations from the swinging sixties.</p><div class="my-4">
  <img src="https://joanieclothing.com/wp-content/uploads/2023/02/BODY-IMAGE-2.jpg" class="mx-auto" alt="">
  </div><p class="leading-[34px] text-lg text-normal-color">Free Love is a BBC2 Between the Covers book club pick, and is a page-turning, seductive novel about one woman's sexual and intellectual awakening in 1960s London. It’s been called ‘beguiling’ by Hilary Mantel, ‘transporting’ by Meg Mason and ‘wonderful’ by Marian Keyes – that is endorsement enough for us!</p><div class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"><span class="absolute bg-red-500 -top-6 left-10 px-4 py-[8px] rounded-full"><svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon font-bold text-white text-lg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"></path></svg></span><h4 class="font-semibold text-lg"> “For anyone who isn’t aware of the Girls’ Network, could you share a little about the ethos and main motivations behind the charity?” </h4></div><p class="leading-[34px] text-lg text-normal-color">Free Love is set in the 1960s. Phyllis Fischer is a bourgeois housewife living in respectable suburbia and married to a civil servant – in the opening pages, we see her at her dressing table, doing her hair and putting on her make-up, feeling pleased with her life. She’s happy. But that same evening, all her contentment is overturned when a scruffy young student, Nicky, the son of friends of the Fischers, comes to dinner and kisses Phyllis is the garden, sets her imagination alight. The novel follows through the consequences of that one crazy evening – and the consequences for the rest of her family, too - her husband and her two children. The novel moves between Phyllis’s safe life in suburbia and her adventures pursuing Nicky to his bedsit in the wilds of Notting Hill, at the heart of the counterculture.</p><div class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"><span class="absolute bg-red-500 -top-6 left-10 px-4 py-[10px] rounded-full"><svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon font-bold text-white text-lg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"></path></svg></span><h4 class="font-semibold text-lg"> “What inspired you to write it?” </h4></div><p class="leading-[34px] text-lg text-normal-color">I was a child in the '60s, but I suppose I’ve always been aware of the radical change that fractured that decade, when a rather grey post-war England, class-ridden and respectable, gave way – at least in places – to a different way of being – flaunting, disobedient, outrageous. My parents in their young lives straddled that divide, and out of that transformation grew the world we live in now. I wanted to tell the story of that change – not in abstract terms, but as it happened inside the life of one woman.</p><div class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"><span class="absolute bg-red-500 -top-6 left-10 px-4 py-[10px] rounded-full"><svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon font-bold text-white text-lg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"></path></svg></span><h4 class="font-semibold text-lg"> “How important is fashion in the novel?” </h4></div><p class="leading-[34px] text-lg text-normal-color">It was crucial – because it was so often through details of dress and appearance that the era’s radicalism played out. So I had to get it right – the contrast between two entirely different looks. On the one hand there was the smart elegance of Phyllis at the opening of the novel; middle-class women in those days still wore gloves to go to the shops. On the other hand there was the studied carelessness of the hippy look, like playing in dressing-up clothes – military jackets and Indian cheesecloth, drooping straight hair, kaftans. A revolution was played out through clothes and hair.</p><div class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"><span class="absolute bg-red-500 -top-6 left-10 px-4 py-[10px] rounded-full"><svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon font-bold text-white text-lg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"></path></svg></span><h4 class="font-semibold text-lg"> “Can you recommend a book you’ve enjoyed recently?” </h4></div><p class="leading-[34px] text-lg text-normal-color">There are some marvellous novels from the 1960s, which I reread while I was working on Free Love. Nell Dunn’s Up the Junction and Poor Cow; Margaret Drabble’s The Millstone. And recently I read Drabble’s A Summer Birdcage for the first time, and loved its sparkle and dry humour, its offhandedness, its poignant comedy made out of young women’s lives.</p><div class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"><span class="absolute bg-red-500 -top-6 left-10 px-4 py-[10px] rounded-full"><svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon font-bold text-white text-lg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"></path></svg></span><h4 class="font-semibold text-lg"> “Have you got any tips for aspiring writers looking to start their own book?” </h4></div><p class="leading-[34px] text-lg text-normal-color">Read and read. You will learn how to write your own book by reading other people’s first. And then look close at hand for your material. Most people write best about a world they know so well that they take it for granted. Try turning the spotlight of your creativity on the thing that’s closest to home, and seems most ordinary.</p><div class="my-4"><img src="https://joanieclothing.com/wp-content/uploads/2023/02/BODY-IMAGE-1-1.jpg" class="mx-auto" alt=""></div><p class="leading-[34px] text-lg text-normal-color">To celebrate the launch of Free Love, we’ve teamed up with Penguin to give one lucky winner the chance to win a bundle of Penguin Books alongside a £100 Joanie voucher!</p>`

// const description = computed(() => {
//   const description2 = blogDetail.value?.data.blog.description
//   // const description2 = blogDetail.value?.data.blog.description.replace(
//   //   /src/g,
//   //   "data-src"
//   // );
//   return description2;
// });

const onRedirect = (id: string) => {
  navigateTo({
    path: `/blog/${id}`,
  });
};
</script>
<style></style>
