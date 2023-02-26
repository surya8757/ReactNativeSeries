import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.carElevated]}>
        <Image 
        source={{
            uri:'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/73/d9/41.jpg'
        }}
        style={styles.cardImage}
         />
         <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Tajmahal</Text>
            <Text style={styles.cardLabel}>Metro city,Delhi</Text>
            <Text style={styles.cardDescription}>
            Enjoy an easy day trip from Delhi to Agra with this private tour. Avoid uncomfortable public transport with door-to-door return transfers. In Agra you’ll visit two incredible UNESCO-listed heritage sites–the Taj Mahal and the Agra Fort–as well as the beautiful Tomb of Itimad-ud-Daulah, said to be an earlier prototype of the Taj Mahal. This tour is ideal for 
            travelers interested in culture and history.
            </Text>
            <Text style={styles.cardFooter}>
                12 min away
            </Text>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    card:{},
    carElevated:{},
    cardImage:{
        height:180
    },
    cardBody:{},
    cardTitle:{},
    cardLabel:{},
    cardDescription:{},
    cardFooter:{}
})