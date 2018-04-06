# Raspberry Pi ZeroをBeaconにするトライアル

## Raspberry Pi Zeroセットアップ

OSイメージをダウンロード

EtcherでSDカードに焼く

USB接続でSSHするための３つの設定を行う
* ssh
  - boot直下にsshという名前の空ファイルを置く
* config.txt
  - dtoverlay=dwc2 追記
* cmdline.txt
  - modules-load=dwc2,g_ether 追記（rootwait と quiet の間）

USBでPCとつなぐ

`ssh pi@raspberrypi.local`

## 初期状態からとりあえず入れたほうがよいもの

apt-getを最新にする

`sudo apt-get upgrade & sudo apt-get update`

rubyやvimなどあると便利なものをインストールする

`sudo apt-get install -y vsftpd vim ruby`

FTPを設定したい場合はは以下を参考にする  
http://yamaryu0508.hatenablog.com/entry/2014/12/02/102648

## Nodejsインストール

```
sudo apt-get update
sudo apt-get install -y nodejs npm
sudo npm cache clean
sudo npm install npm n -g
sudo n stable
```

## Bleaconを使ってRaspberry Pi ZeroをBeaconにする

Bleaconをインストールする

```
sudo apt-get install libbluetooth-dev
npm install bleacon # sudoつけると失敗する
```

目的に応じて以下を実行すればよい。

* アドバタイジングする
  - sudo node advertise.js
* モニタリングする
  - sudo node monitor.js
* アドバタイズとモニタリングを両方行う
  - suod node beacon.js

なお、アドバタイジングとモニタリングを別々のプロセスで実行したら、アドバタイジングパケットの出力が途中で停止してしまうことがあった。（毎回ではない）  
詳しい原因はわかっていないが、とりあえず同じプロセスから両方を実行することでトラブルは発生しなくなった。（プロセスというかタイミングの違いを疑っている）

アドバタイジングパケットの測定はiOSアプリ「Beacon入門」で行えた。非常に便利なアプリだと感じた。
