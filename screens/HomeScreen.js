import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Heading from '../components/Heading';
import WoofCard from '../components/WoofCard';
import WoofPost from '../components/WoofPost';

import { data } from '../utils/data';

export default function HomeScreen(){

  return(

    <ScrollView style={styles.container}>

      <Heading>Trending Woofs</Heading>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.woofs.map((woof,index)=>(
          <WoofCard
            key={index}
            name={woof.name}
            avatar={woof.avatar}
          />
        ))}
      </ScrollView>

      <Heading>New Woof Posts</Heading>

      {data.posts.map((post,index)=>(
        <WoofPost
          key={index}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))}

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'#fff'
  }
})