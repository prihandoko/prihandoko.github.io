---
permalink: /learn/python/
title: "Data Structure"
---


# Data Structure

_Data structure_ atau struktur data adalah suatu struktur yang digunakan untuk menyimpan koleksi data. Pada Python, struktur data yang sudah tertanam (_built in_) ada beberapa diantaranya yaitu _list_, _tuples_, _dictionary_, dan _set_. 

## List

Struktur ini bisa digunakan untuk menyimpan objek dengan memperhatikan urutan. Pada struktur _list_, objek bisa ditambahkan dan dikurangi dengan ```append``` dan ```del```. Perhatikan contoh berikut. Kita bisa mengidentifikasi isinya dengan koordinat seperti layaknya string. Kita juga bisa membuat list menjadi _counter_ untuk melakukan _loop_. 

Sementara itu, kita juga mengakses data dengan memberikan koordinatnya. Kita juga mengambil sebagian data dengan _slice_. 


```python
# Mendefinisikan isi list bisa dilakukan dengan banyak cara. 
# Salah satunya adalah mendeklarasikan isinya dengan meletakkannya 
# di antara dua tanda kurung siku atau brackets. 

kotakota = ["Bandung", "Jakarta", "Surabaya"]
arahangin = ["Utara", "Barat", "Timur", "Selatan"]
```


```python
print(kotakota[1],arahangin[-1])


for kota in kotakota:
    print(kota)
    
for arah in arahangin:
    print(arah)
    
for kota in kotakota:
    for arah in arahangin:
        print("Kabupaten/Kota",kota,arah)
        

```

    Jakarta Selatan
    Bandung
    Jakarta
    Surabaya
    Utara
    Barat
    Timur
    Selatan
    Kabupaten/Kota Bandung Utara
    Kabupaten/Kota Bandung Barat
    Kabupaten/Kota Bandung Timur
    Kabupaten/Kota Bandung Selatan
    Kabupaten/Kota Jakarta Utara
    Kabupaten/Kota Jakarta Barat
    Kabupaten/Kota Jakarta Timur
    Kabupaten/Kota Jakarta Selatan
    Kabupaten/Kota Surabaya Utara
    Kabupaten/Kota Surabaya Barat
    Kabupaten/Kota Surabaya Timur
    Kabupaten/Kota Surabaya Selatan



```python
# Mengakses data
print(kotakota[1])
print(arahangin[-1])

# Mengakses potongan data
print(arahangin[0:2])
```

    Jakarta
    Selatan
    ['Utara', 'Barat']


Untuk menambahkan, kita bisa menggunakan fungsi ```append``` pada list tersebut. Untuk membuang, kita bisa menggunakan fungsi ```del``` pada koordinat yang mau dibuang. Kita juga bisa mengganti elemen di dalam tuples. 


```python
kotakota.append('London')
print(kotakota)

del arahangin[0]
print(arahangin)


arahangin[0] = 'pusat'
print(arahangin)


```

    ['Bandung', 'Jakarta', 'Surabaya', 'London']
    ['Barat', 'Timur', 'Selatan']
    ['pusat', 'Timur', 'Selatan']


## Tuples

Mirip dengan _list_, _tuples_ juga digunakan untuk menyimpan objek. Namun, _list_ tidak bisa diganti, ditambahkan, maupun dibuang. Apabila dipaksa diubah, akan memunculkan pesan eror. 


```python
# Mendeklarasikan tupel dengan menyebutkan isinya dilakukan 
# dengan cara meletakkan isinya di antara dua tanda kurung 
# biasa atau parenthesis. 

pohon = ("akar","batang","cabang","ranting","daun","buah","biji")


pohon.append("kuncup")
```


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    <ipython-input-5-bdeb34ceae96> in <module>
          6 
          7 
    ----> 8 pohon.append("kuncup")
    

    AttributeError: 'tuple' object has no attribute 'append'



```python
del pohon[0]
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-6-946812364ce6> in <module>
    ----> 1 del pohon[0]
    

    TypeError: 'tuple' object doesn't support item deletion


Kita juga bisa mengambil data seperti halnya pada _list_. 


```python
# Mengakses data
print(pohon[1])
print(pohon[-2])

# Mengakses potongan data
print(pohon[1:3])
print(pohon[0:-1])
```

    batang
    buah
    ('batang', 'cabang')
    ('akar', 'batang', 'cabang', 'ranting', 'daun', 'buah')


## Dictionary

Kita tahu bahwa _list_ dan _tuples_ merupakan kumpulan objek dengan urutan, otomatis cara pemanggilannya adalah dengan _key_-nya yaitu bilangan bulat. Sementara itu, _dictionary_, sama seperti namanya: kamus, bisa dipanggil dengan memanggil "kata kunci"nya dan outputnya adalah "artinya".  


```python
# Pendeklarasian dictionary bisa dilakukan dengan mendeklarasikan 
# isinya diantara dua tanda kurung kurawal atau curly braces.
# Isi dari dictionary adalah pasangan, yaitu "kata" dan "artinya"

AM = {
    'title' : 'Antimage',
    'ras' : 'dark elf',
    'atribut utama' : 'agility',
    'kelas' : 'carry',
    'max level' : 25,
    'nama' : "Magina",
}

CM = {
    'title' : 'Crystal Maiden',
    'ras' : 'human',
    'atribut utama' : 'intelegence',
    'kelas' : 'support',
    'max level' : 25,
    'nama' : "Rylai",   
}
```


```python
print("Dua hero di game Dota 2 contohnya adalah",AM['title'],"dan",CM['title'])
print("Keduanya merupakan hero dari Warcraft III dengan nama ",AM['nama'],"dan",CM['nama'])
```

    Dua hero di game Dota 2 contohnya adalah Antimage dan Crystal Maiden
    Keduanya merupakan hero dari Warcraft III dengan nama  Magina dan Rylai



```python
for title, nama in AM.items():
    print('%s hero ini adalah %s' % (title, nama))
```

    title hero ini adalah Antimage
    ras hero ini adalah dark elf
    atribut utama hero ini adalah agility
    kelas hero ini adalah carry
    max level hero ini adalah 25
    nama hero ini adalah Magina


Kita juga bisa mengkombinasikan antara list dan tuple dengan dictionary. Misalnya seperti contoh berikut.


```python
heroes = [AM, CM]
for hero in heroes:
    print('Hero',hero['title'])
    for title, nama in hero.items():
        print('%s hero ini adalah %s' % (title, nama))
    print("======")
```

    Hero Antimage
    title hero ini adalah Antimage
    ras hero ini adalah dark elf
    atribut utama hero ini adalah agility
    kelas hero ini adalah carry
    max level hero ini adalah 25
    nama hero ini adalah Magina
    ======
    Hero Crystal Maiden
    title hero ini adalah Crystal Maiden
    ras hero ini adalah human
    atribut utama hero ini adalah intelegence
    kelas hero ini adalah support
    max level hero ini adalah 25
    nama hero ini adalah Rylai
    ======


## Sequences dan Sets

_Sequences_ dan _Set_ adalah dua konsep dalam bahasa Python untuk kumpulan objek yang memperhatikan urutan dan tidak memperhatikan urutan. Seperti namanya, _sequences_ (terjemah: barisan) adalah kumpulan objek yang memperhatikan urutan. List, Tuples adalah contoh sequences. String juga merupakan contoh sequences. Sedangkan _set_ adalah kumpulan objek yang tidak memperhatikan urutan ataupun berapa banyak ia muncul. Set sendiri dideklarasikan dengan perintah ```set```. Keduanya memiliki persamaan, yaitu _membership test_. Yaitu anggota dan tidak anggota. Perbedaannya ada di urutan. Sequence bisa dipanggil berdasarkan urutan atau koordinatnya, sedangkan set tidak bisa. Output dari set adalah logical, yaitu ```True``` atau ```False```. 

Berikut contoh sequence dan set. 


```python
# deklarasi objek pada sequences

namahero = "Ironman"
avengers = ["Ironman", "Thor", "Captain America", "Hulk", \
            "Hawk Eye", "Black Widow"]
weapon = ("Wealth", "Hammer", "Shield",\
         "Science", "Intelegence")

print(namahero[0:4])
print(avengers[0:4])

for i in range(4):
    print(avengers[i],"has weapon that is",weapon[i])

```

    Iron
    ['Ironman', 'Thor', 'Captain America', 'Hulk']
    Ironman has weapon that is Wealth
    Thor has weapon that is Hammer
    Captain America has weapon that is Shield
    Hulk has weapon that is Science



```python
# deklarasi objek pada set

life = "love and friendship need time and money"

# test 
print('shot' in life)
print('end' in life)
```

    False
    True

