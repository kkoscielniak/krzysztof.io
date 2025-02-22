import React from "react"
import { graphql } from "gatsby"
import Markdown from 'markdown-to-jsx'

import Layout from "../components/layout"
import SEO from "../components/seo"

const md = `
# Polityka prywatności

Skoro trafiłeś na tę stronę, to znaczy, że ważne jest dla Ciebie bezpieczeństwo Twoich danych w Sieci. Wiedz, że dbam o odpowiednie
traktowanie Twoich danych osobowych.

Szanując Twój czas, przygotowałem dla Ciebie skróconą wersję najważniejszych zasad związanych z ochroną prywatności. Jeżeli podstawowe informacje okażą się dla Ciebie niewystarczające, poniżej znajdziesz szerszy opis, w którym wyjaśniam jak obchodzę się z powierzonymi mi przez Ciebie danymi osobowymi.

## Podstawowe informacje

- Administratorem danych osobowych na stronie krzysztof.io jestem ja, czyli: Krzysztof Jendrzyca.
- Możesz się ze mną skontaktować w każdej chwili z wykorzystaniem adresu e-mail: krzysztof@krzysztof.io
- Pamiętaj, że podanie danych osobowych, a także zgoda na ich przetwarzanie są całkowicie dobrowolne. Wszelkie przekazane mi dane osobowe są przetwarzane wyłącznie w zakresie i w celu, na jaki wyraziłeś zgodę.
- W każdej chwili masz prawo do aktualizacji lub całkowitego usunięcia swoich danych osobowych. Możesz to zrobić samodzielnie lub korzystając z mojej pomocy.
- Dbam o należytą ochronę Twoich danych osobowych, gwarantując Ci, że będą one przetwarzane wyłącznie w celu, na który wyraziłeś zgodę, przechowywane w bezpieczny sposób oraz nieudostępniane podmiotom trzecim, jeżeli nie wyraziłeś na to zgody.
- Zapisując się na newsletter lub dokonując zamówienia, przekazujesz mi swoje dane osobowe, a ja gwarantuję Ci, że Twoje dane pozostaną bezpieczne i nie zostaną udostępnione podmiotom trzecim bez Twojej wyraźnej zgody.
- Korzystam z narzędzi analitycznych, opisanych poniżej, które zbierają anonimowe informacje na temat Twoich odwiedzin serwisu. Wykorzystuję też narzędzia takie jak Facebook Pixel i Google AdWords, które pozwalają wyświetlać Ci reklamy.
- Podobnie jak ma to miejsce niemal na każdej stronie internetowej, ja również wykorzystuję pliki cookies.

## Administrator

Administratorem danych osobowych strony internetowej: krzysztof.io, czyli podmiotem odpowiedzialnym za zapewnienie bezpieczeństwa Twoim danym osobowym jest:

Krzysztof Jendrzyca,

e-mail: krzysztof@krzysztof.io

## Twoje uprawnienia

Aktualne przepisy prawa przyznają Ci szereg uprawnień związanych z przetwarzaniem Twoich danych osobowych:

- prawo dostępu do danych osobowych,
- prawo do sprostowania danych osobowych,
- prawo do usunięcia danych osobowych,
- prawo do ograniczenia przetwarzania danych osobowych,
- prawo do wniesienia sprzeciwu co do przetwarzania danych osobowych,
- prawo do przenoszenia danych,
- prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych),
- prawo do odwołania zgody na przetwarzanie danych osobowych, jeżeli wyraziłeś taką zgodę.

Pamiętaj, że zawsze możesz również zwrócić się do mnie z żądaniem udostępnienia Ci szerszych informacji, jakimi danymi na Twój temat dysponuję oraz w jakich celach je przetwarzam. Wystarczy, że wyślesz wiadomość na podany powyżej adres e-mail.

## Cele, w jakich przetwarzam Twoje dane osobowe

### Newsletter

Zapisując się do newslettera, przekazujesz mi swój adres e-mail oraz swoje imię za pośrednictwem formularza zapisu do newslettera. Podanie danych jest dobrowolne, lecz konieczne, by zapisać się do newslettera.

Dane te wykorzystywane są w celu przesyłania Ci newslettera, a podstawą prawną do ich przetwarzania jest Twoja zgoda. Dane będą przetwarzane przez czas funkcjonowania newslettera, chyba że wcześniej zrezygnujesz z jego otrzymywania, co spowoduje usunięcie Twoich danych z bazy.

W każdej chwili możesz sprostować swoje dane zapisane w mojej bazie newsletterowej, jak również zażądać ich usunięcia, rezygnując z otrzymywania newslettera.

### Zamówienia i wystawianie faktur VAT

Zamawiając na stronie internetowej jakikolwiek produkt, podajesz mi dane niezbędne do realizacji zamówienia (imię i nazwisko, adres rozliczeniowy, adres e-mail, numer telefonu). Podanie danych jest dobrowolne, ale niezbędne do złożenia zamówienia.

Dane przekazane mi w związku z zamówieniem przetwarzane są w celu realizacji zamówienia, wystawienia faktury i uwzględnienia jej w dokumentacji księgowej, a także mogą być wykorzystane w celach archiwalnych i statystycznych.

Dane o zamówieniach będą przetwarzane przez czas niezbędny do realizacji zamówienia, a później do czasu upływu terminu przedawnienia roszczeń z tytułu zawartej umowy. Po upływie tego terminu, dane nadal mogą być przeze mnie przetwarzane w celach statystycznych. Mam obowiązek przechowywać faktury przez okres 5 lat od końca roku podatkowego, w którym nastąpiło wystawienie faktury VAT.

W przypadku danych podanych w celu realizacji zamówienia nie możesz sprzeciwić się przetwarzaniu danych oraz domagać się usunięcia danych do czasu upływu terminu przedawnienia roszczeń z tytułu zawartej umowy.

### Reklamacje i odstąpienie od umowy

Składając reklamację lub odstępując od umowy przekazujesz mi dane osobowe zawarte w treści swojego oświadczenia (imię i nazwisko, adres, numer telefonu, adres e-mail oraz ewentualnie numer rachunku bankowego).

Podanie tych danych jest dobrowolne, lecz konieczne, by złożyć reklamację lub odstąpić od umowy. Dane przekazane mi w związku ze złożeniem reklamacji lub odstąpieniem od umowy wykorzystywane są w celu realizacji procedury reklamacyjnej lub procedury odstąpienia od umowy.

Dane będą przetwarzane przez czas niezbędny do realizacji procedury reklamacyjnej lub procedury odstąpienia. W przypadku danych zawartych w reklamacjach oraz oświadczeniach o odstąpieniu od umowy nie masz możliwości sprzeciwić się przetwarzaniu swoich danych oraz domagać się usunięcia danych do czasu upływu terminu przedawnienia roszczeń z tytułu zawartej umowy.

### Kontakt z wykorzystaniem formularza

Kontaktując się poprzez formularz kontaktowy, podajesz mi przynajmniej swój adres e-mail. To od Ciebie zależy, czy w treści podasz dodatkowe dane. Podanie danych jest dobrowolne, lecz konieczne, by nawiązać ze mną kontakt.

Twoje dane są w tym przypadku przetwarzane w celu kontaktu z Tobą. Podstawą, do przetwarzania danych jest Twoja zgoda. Masz prawo żądać przedstawienia historii prowadzonej korespondencji oraz możesz domagać się jej usunięcia, chyba że zachowanie korespondencji uzasadnione jest moim interesem (np. ochrona przed roszczeniami).

### Komentarze

System komentarzy obsługiwany jest przez firmę Disqus Inc., 301 Howard Street, Suite 300, San Francisco, CA94105, USA. Disqus jest samodzielnym administratorem Twoich danych osobowych, a korzystanie z systemu odbywa się na podstawie akceptacji przez Ciebie regulaminu świadczenia usług przez Disqus.

Dane przekazane podczas dodawania komentarza wykorzystywane są w celu opublikowania komentarza. Podstawą ich przetwarzania jest Twoja zgoda. Dane będą przetwarzane przez czas funkcjonowania komentarzy na blogu, chyba że wcześniej poprosisz o usunięcie komentarza, co spowoduje usunięcie Twoich danych z bazy.

W każdej chwili możesz sprostować swoje dane przypisane do komentarza, jak również zażądać ich usunięcia i przeniesienia. Uprawnienia te możesz realizować bezpośrednio w ramach swojego konta użytkownika w systemie Disqus.

## Powierzenie przetwarzania danych osobowych

Twoje dane mogą być przetwarzane przez podmioty trzecie, którym zlecam wykonanie poszczególnych czynności związanych z zapewnieniem właściwego funkcjonowania strony internetowej. Podmioty, którym zlecam przetwarzanie danych osobowych, gwarantują stosowanie odpowiednich środków ochrony i bezpieczeństwa danych osobowych wymaganych przez przepisy prawa. Podmioty, którym powierzam przetwarzanie danych, to:

- Netlify, Inc (2325 3rd Street, Suite 215, San Francisco, 94107 CA) – w celu przechowywania danych osobowych na serwerze ([ich polityka prywatności](https://www.netlify.com/gdpr/)),
- MailerLite (UAB “MailerLite”, J. Basanavičiaus 15, LT-03108 Vilnius, Lithuania) – w celu korzystania z systemu mailingowego, w którym przetwarzane są Twoje dane, jeżeli zapiszesz się do newslettera ([ich polityka prywatności](https://www.mailerlite.com/legal/privacy-policy)).

## Logi serwera

Korzystając z mojej strony internetowej przesyłasz z wykorzystaniem swojego urządzenia zapytania do serwera, na którym przechowywana jest moja strona. Logi obejmują m.in. adres IP, datę i czas serwera, informacje o przeglądarce internetowej i systemie operacyjnym, które używasz. Logi są zapisywane i przechowywane na serwerze. Logi serwera stanowią wyłącznie materiał pomocniczy służący do administrowania stroną. Ich zawartość nie jest nikomu ujawniana.

Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze strony i nie są wykorzystywane w celu identyfikacji konkretnych osób.

## Pliki cookies

Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, które przechowywane są w Twoim urządzeniu końcowym. Na stronie internetowej stosuję dwa zasadnicze rodzaje plików cookies: sesyjne oraz stałe. Cookies sesyjne są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). Stałe pliki cookies przechowywane są w Twoim urządzeniu końcowym przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Ciebie.

Podczas pierwszej wizyty na mojej stronie internetowej wyświetlona została Ci informacja o stosowaniu na niej plików cookies. Akceptacja komunikatu oznacza, że zgadzasz się na korzystanie z plików cookies. W każdym czasie możesz dokonać zmiany ustawień dotyczących plików cookies.

Ustawienia dotyczące plików cookies mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym zamieszczeniu w Twoim urządzeniu. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach oprogramowania przeglądarki internetowej. Pamiętaj, że wyłączenie lub ograniczenie obsługi plików cookies może powodować trudności w korzystaniu z mojej strony.


Wykorzystuję cookies własne w celu:

- zapewnienia prawidłowego działania strony
- realizacji procesu zamówienia
- prawidłowego działania pop-upów i formularzy.

Wykorzystuję również cookies podmiotów zewnętrznych:

- Google Analytics (wydawca: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) – w celu tworzenia statystyk i ich analizie dla optymalizacji strony,
- Facebook Pixel (wydawca: Facebook Inc., 1601 S. California Ave. Palo Alto, CA 94304, USA) – w celu reklamowania mojej strony internetowej w serwisie Facebook,
- Disqus (wydawca: Disqus Inc., 717 Market St. San Francisco, CA 94103) - w celu obsługi komentarzy na blogu.

## Zmiana polityki bezpieczeństwa i plików cookies

Zastrzegam sobie prawo do wprowadzania zmian w polityce prywatności. Zmiany będą wprowadzane jeśli będzie wymagać tego obowiązujące prawo lub ulegną zmianie warunki technologiczne funkcjonowania mojej strony internetowej. Aktualny tekst polityki prywatności oraz wersje archiwalne zawsze będą znajdować się na mojej stronie internetowej.
`

const PolitykaPrywatnosciPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Polityka Prywatności" slug="/polityka-prywatnosci" />
      <Markdown children={md} />
    </Layout>
  )
}

export default PolitykaPrywatnosciPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
