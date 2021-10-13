<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <div class="grid grid-cols-5">
                        <div>
                            <img src="./img/dante.gif" class="h-12 sm:h-12" />
                        </div>
                        <div>
                            <img src="./img/ddd.jpg" class="h-12 sm:h-12" />
                        </div>
                        <div class="col-span-2">
                            {{ name }}
                        </div>
                        <div>
                            <select v-model="locale">
                                <option v-for="lang in languages" :value="lang.code">{{ lang.label }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="pt-6 divide-y divide-gray-200">
                        <p class="ml-2">
                            {{ t('birth') }}    
                        </p>
                        <p class="ml-2">
                            {{ t('citizenship') }}
                        </p>
                        <p class="ml-2">
                            {{ t('address') }}
                        </p>
                        <ul class="pt-6 list-disc space-y-2">
                            <li class="flex items-start">
                                <p class="ml-2">
                                    {{ t('bachelor_cs') }}
                                    {{ t('thesis_cs') }}
                                </p>
                            </li>
                            <li class="flex items-start">
                                <p class="ml-2">
                                    {{ t('bachelor_lls') }}
                                    {{ t('thesis_lls') }}
                                </p>
                            </li>
                        </ul>
                        <div class="pt-6 text-base leading-4 sm:text-lg sm:leading-5">
                            <p>
                                <ul>
                                    <li>
                                        <a target="_blank" href="https://github.com/didoda">@github</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://en.gravatar.com/didokarhu">@gravatar</a
                                    ></li>
                                    <li>
                                        <a target="_blank" href="https://twitter.com/ddd_78">@twitter</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li><a target="_blank" href="http://creativecommons.org/licenses/by-sa/2.0/it/" rel="license">Creative Commons 2.0</a></li>
                                </ul>
                            </p>
                        </div>
                        <div class="pt-6 text-base leading-6 sm:text-lg sm:leading-7">
                            <p>© {{ website }} <sup>{{ version }}</sup> - <a href="mailto:dante(at)didoda.com">{{ name }}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  setup() {
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
  data() {
      return {
        languages: [
            {code: 'en', label: 'English'},
            {code: 'es', label: 'Español'},
            {code: 'it', label: 'Italiano'},
            {code: 'pt', label: 'Português'},
            {code: 'fi', label: 'Suomi'},
        ],
        website: 'www.didoda.com',
        version: '4.0',
        name: 'Dante Di Domenico',
      };
  }
}
</script>

<i18n lang="yaml">
en:
    birth: Born on 11th of October 1978
    citizenship: Italian
    address: Bologna, Italy
    bachelor_cs: Bachelor Degree in Computer Science, at University of Bologna, 21st of July 2003
    thesis_cs: 'Thesis work: "A software instrument to learn JBoss platform"'
    bachelor_lls: Bachelor Degree in Foreign Languages and Literatures, at University of Bologna, 3rd of July 2017
    thesis_lls: 'Thesis work: "Os Lusíadas - Sources and places of Italian Literature in Camões works"'
    profession: 'Profession: Web Developer'
es:
    birth: Nacido el 11 de octubre de 1978
    citizenship: Italiano
    address: Bologna, Italia
    bachelor_cs: Licenciatura en Informática, en la Universidad de Bolonia, 21 de Julio de 2003
    thesis_cs: 'Trabajo de fin de carrera: "Un instrumento software para el aprendizaje de la plataforma JBoss"'
    bachelor_lls: Licenciatura en Lenguas y Literaturas extranjeras, en la Universidad de Bolonia, 3 de Julio de 2017
    thesis_lls: 'Trabajo de fin de carrera: "Os Lusíadas - Fuentes y lugares de Literatura Italiana en la obra de Camões"'
    profession: 'Profesión: Programador Web'
fi:
    birth: Syntynyt 11 Lokakuuta 1978
    citizenship: Italialainen
    address: Bologna, Italia
    bachelor_cs: Tietojenkäsittelutieden loppututkinto (Laurea in informatica classe 26 Scienze e Tecnologie informatiche), Bolognan yliopistossa, 21 heinäkuuta 2003
    thesis_cs: Pro gradu työ "Tietokoneohjelmat, jotka auttavat oppimaan JBossin"
    bachelor_lls: Vieraiden kielten ja kirjallisuuksien tutkinto, Bolognan yliopistossa, 3 heinäkuuta 2017
    thesis_lls: 'Pro gradu työ: "Os Lusíadas - Italialaisen kirjallisuuden lähteet ja paikat Camõesin työssä"'
    profession: 'Ammatti: Web ohjelmoija'
it:
    birth: Nato il 11 Ottobre 1978
    citizenship: Italiano
    address: Bologna, Italia
    bachelor_cs: Laurea in informatica classe 26 Scienze e Tecnologie informatiche presso l'Università degli Studi di Bologna, 21 luglio 2003
    thesis_cs: Tesi di laurea dal titolo "Uno strumento software per l'apprendimento della piattaforma JBoss"
    bachelor_lls: Laurea in Lingue e Letterature Straniere classe 11 Lingue e Culture Moderne presso l'Università degli Studi di Bologna, 3 luglio 2017
    thesis_lls: Tesi di laurea dal titolo "Os Lusíadas - Fonti e luoghi di Letteratura Italiana nell’opera di Camões"
    profession: 'Professsione: Sviluppatore Web'
pt:
    birth: Nascido el 11 de Outubro de 1978
    citizenship: Italiano
    address: Bologna, Italia
    bachelor_cs: Licenciatura em Informática; formado na Universidade de Bolonia, em 21 de Julho de 2003
    thesis_cs: 'Trabalho de fim de estudos: "Um instrumento software para a aprendizagem da plataforma JBoss"'
    bachelor_lls: Licenciatura em Línguas e Literaturas estrangeiras; formado na Universidade de Bolonia, em 3 de Julho de 2017
    thesis_lls: 'Trabalho de fim de estudos: "Os Lusíadas - Fontes e lugares de Literatura Italiana na obra de Camões"'
    profession: 'Profissão: Programador Web'
</i18n>