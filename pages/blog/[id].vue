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

    const {
      name,
      type,
      class,
      ...nest,
    } = this.props

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
              v-html="ref(blogDetail?.data.blog.description).value"
              class="leading-[34px] text-lg text-normal-color"
            />

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
// const description = `<p class="leading-[34px] text-lg text-normal-color">We’re thrilled to once again be collaborating with The Girls’ Network – a wonderful award-winning charity that works with girls from disadvantaged communities and provides them with a female mentor to open new opportunities and networks that they otherwise would not have access to. Our Gloria ‘Girl Power’ Slogan Tee is available now, with £5 from each sale being donated to the charity. </p><p class="leading-[34px] text-lg text-normal-color">We caught up with Rebecca Stevens, Greater Manchester Region Manager for The Girls’ Network, to learn more about the charity and the work they do. </p><p class="leading-[34px] text-lg text-normal-color">Rebecca’s role involves working with schools to develop mentoring programmes, enrolling and training new mentors and growing the network by recruiting more schools to work with. </p><p class="leading-[34px] text-lg text-normal-color">Take it away, Rebecca! </p><div class="my-4"><img src="https://joanieclothing.com/wp-content/uploads/2021/08/THE-GIRLS-NETWORK-GLORIA-4.jpg" class="mx-auto" alt=""></div><div class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"><span class="absolute bg-red-500 -top-6 left-10 px-4 py-[14px] rounded-full"><svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon font-bold text-white text-lg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"></path></svg></span><h4 class="font-semibold text-lg"> “For anyone who isn’t aware of the Girls’ Network, could you share a little about the ethos and main motivations behind the charity?” </h4></div><p class="leading-[34px] text-lg text-normal-color">The Girls’ Network aims to inspire and empower girls aged 14-19 from the least advantaged communities by connecting them to a mentor and a network of professional role models who are women. </p><p class="leading-[34px] text-lg text-normal-color">We were founded by two teachers who saw first-hand the multiple barriers facing the least advantaged girls in their classrooms: the pressure to conform to ideals, a lack of confidence or self-belief, and a lack of professional female role models in their networks. The importance of role models is really evident anecdotally but also through research demonstrating that it’s hard to become someone or something without examples of people like you doing it. Research shows that speaking directly to professionals in certain jobs is one of the biggest influencers in challenging your own stereotypes on what you can and can’t do. So diverse role models are key: people you can relate to by gender, ethnicity, sexuality, career choices, background. This is particularly important for young people. </p><div class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"><span class="absolute bg-red-500 -top-6 left-10 px-4 py-[14px] rounded-full"><svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon font-bold text-white text-lg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"></path></svg></span><h4 class="font-semibold text-lg"> “Can you tell us how The Girls’ Network started, and how long the charity has been running for now?” </h4></div><p class="leading-[34px] text-lg text-normal-color">It began in 2013, when Charly Young and Becca Dean were teachers at a secondary school in North West London and they identified the barriers faced by the young women they taught. They established a 1:1 mentoring programme for 30 girls based on research showing that conversations and personal relationships could have a big impact on challenging stereotypes and expectations. </p><div class="bg-[#f3f2ee] relative my-[50px] px-10 pt-[50px] pb-[35px]"><span class="absolute bg-red-500 -top-6 left-10 px-4 py-[14px] rounded-full"><svg data-v-4fa0a2a1="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon font-bold text-white text-lg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3zm7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"></path></svg></span><h4 class="font-semibold text-lg"> “We’re thrilled to be supporting the Girls’ Network once again, with £5 from every T-shirt sold being donated - what resources or initiatives in the charity will this money help to support?” </h4></div><p class="leading-[34px] text-lg text-normal-color">Firstly, thank you so much to Joanie Clothing for supporting us with this donation. The T-shirts are fabulous (and super soft and comfortable!). </p><p class="leading-[34px] text-lg text-normal-color">The donations will support the work we do by enabling us to train our wonderful volunteer mentors, support our work with schools and enable us to reach more girls who will benefit from the support and guidance of a professional woman </p>`
// const description = ref(blogDetail.value?.data.blog.description);

const onRedirect = (id: string) => {
  navigateTo({
    path: `/blog/${id}`,
  });
};
</script>
