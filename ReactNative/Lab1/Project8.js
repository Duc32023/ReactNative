import React from 'react';
import { SectionList, Text, View, StyleSheet, SafeAreaView } from 'react-native';

const people = [
  { name: { first: 'Quang', last: 'Đức' } },
  { name: { first: 'Gia', last: 'Huy' } },
  { name: { first: 'Hoàng', last: 'Bảo' } },
  { name: { first: 'Anh', last: 'Tuấn' } },
  { name: { first: 'Quang', last: 'Cường' } },
  { name: { first: 'Quang', last: 'Dũng' } },
  { name: { first: 'Văn', last: 'Đức' } },
  { name: { first: 'Hoàng', last: 'Anh' } },
  { name: { first: 'Thị', last: 'Mẫn' } },
];

const groupByLastName = (data) => {
  const grouped = {};

  data.forEach((item) => {
    const letter = item.name.last[0].toUpperCase();
    if (!grouped[letter]) {
      grouped[letter] = { title: letter, data: [] };
    }
    grouped[letter].data.push(item);
  });

  return Object.values(grouped).sort((a, b) => a.title.localeCompare(b.title));
};

const Project8 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Danh sách</Text>
      <SectionList
        sections={groupByLastName(people)}
        keyExtractor={(item, index) => `${item.name.first}-${index}`}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Project8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#3a3a3a',
  },
  sectionHeader: {
    backgroundColor: '#dfe6e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderTopColor: '#b2bec3',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2d3436',
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe6e9',
  },
  name: {
    fontSize: 16,
    color: '#2d3436',
  },
  separator: {
    height: 1,
    backgroundColor: '#dfe6e9',
    marginLeft: 16,
  },
});
