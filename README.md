# pull-identify-filetype

Identifies the file-type passing through the stream using the [magic-number signatures at the start of the file](http://en.wikipedia.org/wiki/list_of_file_signatures).

```js
var pull = require('pull-stream')
var identify = require('pull-identify-filetype')

pull(
  /* source */
  identify(function (type) {
    console.log(type) // => string | false
  }),
  /* sync */
)
```

**Supported types:**

jpg
png
gif
bmp
tif
tif
nif
ico
psd
rar
zip
gz
tar
msi
iso
rtf
avi
mov
wmv
wma
swf
flv
mid
pdf
doc
docx
mp3

**Tested:**

tif
pdf
psd
gif
jpg
png
bmp
tif
ico
rar
docx
gz
tar
doc
rtf
mov