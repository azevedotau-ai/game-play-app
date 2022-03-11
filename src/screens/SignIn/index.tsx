import { View, Text, Image,StatusBar } from "react-native";
import React from "react";
import IllustrationIMG from "../../assets/illustration.png";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export const SignIn = () => {
  return (
    <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
        />
      <Image
        source={IllustrationIMG}
        style={styles.images}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organiza {`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogas seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title=" Entrar com Discord"  activeOpacity={0.8} />
      </View>
    </View>
  );
};
