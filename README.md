# First-React-Native-App

(if you want run the project, You must have set up the react-native environment (emulator, jdk etc.).

1) npm install
2) npx react-native run-android
3) You can find the last updated apk file under **"android/app/build/outputs/apk/release"** directory.
<img height="400" src="https://raw.githubusercontent.com/Mehmet-Erdem-Akin/First-React-Native-App/main/src/Screenshot_20211130-201844.png">
<img height="400" src="https://raw.githubusercontent.com/Mehmet-Erdem-Akin/First-React-Native-App/main/src/Screenshot_20211130-201852.png">
<img height="400" src="https://raw.githubusercontent.com/Mehmet-Erdem-Akin/First-React-Native-App/main/src/Screenshot_20211130-201858.png">
<img height="400" src="https://raw.githubusercontent.com/Mehmet-Erdem-Akin/First-React-Native-App/main/src/Screenshot_20211130-201933.png">

# MaxContentLine
![image](https://i.ibb.co/tC7RYKd/max-Content-Line.png)

Using this package you can create a line restriction on text content. Your text content is limited to the number of lines you specify. And "..." are placed at the end of the text.

Bu paketi kullanarak, metin içeriklerinize kolayca satır sınırlandırması koyabilirsiniz. Metin içeriği, belirlediğiniz satır sayısı ile sınırlandırılır. Ve metnin sonuna "..." koyulur. 

## Installation
``` 
npm i max-content-line
```

## Usage
first, import the component. then you have to call the component in jsx and give values ​​to maxLine and content attributes.

Öncelikle componenti import edin. Sonra, componenti çağırıp maxLine ve content özelliklerine belirlediğiniz değerleri girin. 

```
    import MaxContentLine from 'max-content-line';

```

```
    <MaxContentLine
        maxLine={number}
        content="{your_content}"
    />
```

