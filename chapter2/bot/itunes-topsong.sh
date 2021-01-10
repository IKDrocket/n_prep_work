#!/bin/bash
dirname="/home/vagrant/workspace/n_prep_work/chapter2/bot/itunes-topsong-rss"
#echo $dirname
mkdir -p $dirname

filename="${dirname}/hourly-ranking-`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"
curl -s -o $filename -H "User-Agent: CrawlBot; yusuke1128rocket@gmail.com" https://itunes.apple.com/jp/rss/topsongs/limit=10/xml
