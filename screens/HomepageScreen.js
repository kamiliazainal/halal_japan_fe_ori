import React from 'react';
import {  StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const HomepageScreen = props => {
    const renderGridItem = (itemData) => {
        if (itemData.item.id == "c1") {
            return (
            <CategoryGridTile 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
            props.navigation.navigate({ routeName: 'Explore',
            params: {
                categoryId: itemData.item.id
            }
        });
        }}
        />)
           }
           else if (itemData.item.id =="c5"){
               return (
                <CategoryGridTile 
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate({ routeName: 'ProfilePage',
                    params: {
                        categoryId: itemData.item.id
                    }
                });
                }}
                />
               )
           }
           else if (itemData.item.id=="c6"){
               return (
                <CategoryGridTile 
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate({ routeName: 'AboutPage',
                    params: {
                        categoryId: itemData.item.id
                    }
                });
                }}
                />
               )
           }
           else {
        return <CategoryGridTile 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
        //     props.navigation.navigate({ routeName: 'ExplorePage',
        //     params: {
        //         categoryId: itemData.item.id
        //     }
        // });
        }}
        />}
    };
    return (
        <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomepageScreen;
