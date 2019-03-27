module.exports = {
  siteMetadata: {
    title: 'Knowit Stavanger Fagseminar',
    data: {
      title: 'Fagseminar høst 2018',
      keywords: ['knowit', 'fagseminar', 'stavanger', 'madrid', '2018'],
      // keywords: 'knowit',
      event: {
        date: '4. april - 7. april 2019',
        longDate: '4. april - 7. april 2019',
        venue:
        'Hotel Ottilia, Bryggernes Plads, Copenhagen, Denmark',
        hotel: 'Hotel Ottilia',
        address: 'Bryggernes Plads',
        city: 'Copenhagen',
        country: 'Denmark',
        gmapsUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.2700000940886!2d12.530804516569166!3d55.6669048805304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652539a71c6bdb1%3A0x469556aeafdd4bc2!2sHotel+Ottilia!5e0!3m2!1sen!2sno!4v1553703436805',
      },
      schedules: [
        {
          day: 'Torsdag 4. April',
          collections: [
            {
              time: '20:20',
              title: 'Flyet drar fra Stavanger Lufthavn',
            },
            {
              time: '21:30',
              title: 'Vi ankommer København',
            },
          ],
        },
        {
          day: 'Fredag 5. April',
          collections: [
            {
              time: '09:00',
              title: 'Fagprogram - Start',
              entries: [
                {
                  room: 'Auditorium',
                  slots: ['kubernetes'],
                },
              ],
            },
            {
              time: '12:00',
              title: 'Lunsj',
            },
            {
              time: '16:00',
              title: 'Fagprogram - Ferdig',
            },
            {
              time: '18:00',
              title: 'Middag på Vækst',
            },
          ],
        },
        {
          day: 'Lørdag 6. April',
          collections: [
            {
              time: '12:00',
              title: 'Lunsj på Øl og Brød',
            },
            {
              time: '14:00-16:00',
              title: 'Sykkeltur',
            },
            {
              time: '19:00',
              title: 'Middag på Warpigs',
            },
          ],
        },
        {
          day: 'Søndag 7. April',
          collections: [
            {
              time: '16:40',
              title: 'Flyet drar fra København',
            },
            {
              time: '17:50',
              title: 'Vi ankommer Stavanger Lufthavn',
            },
          ],
        },
      ],
      talks: {
        kubernetes: {
          pending: false,
          title: 'Kubernetes Workshop',
          type: 'Workshop',
          description: 'Beskrivelse kommer',
        },
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'knowit-stavanger-madrid-conference',
        short_name: 'MadCon',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/madcon-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}