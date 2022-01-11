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
First, import the component. Then, you have to call the component in jsx and give values ​​to maxLine and content properties.

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
### Advanced usage

<table>
	<tr>
		<th>Property</th>
		<th>Type</th>
		<th>Description</th>
		<th>Required</th>
	</tr>
	<tr>
		<td>maxLine</td>
		<td>number</td>
		<td>Number of lines of text.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>content</td>
		<td>string</td>
		<td>Your content</td>
		<td>Yes</td>
	</tr>
	
</table>

### Any bugs or feature request, feel free to submit a pull request on Github.

## Contact
- [groftware.tech](https://groftware.tech)
- [hello@groftware.tech](mailto:hello@groftware.tech)



