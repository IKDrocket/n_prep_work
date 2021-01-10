#!/bin/bash
dirname="/home/vagrant/workspace/n_prep_work/chapter2/bot/niconico-ranking-rss"
#echo $dirname
mkdir -p $dirname

filename="${dirname}/hourly-ranking-`date +'%Y%m%d%H%M'`.xml"
echo "Save to $filename"
curl -s -o $filename -H "User-Agent: CrawlBot; yusuke1128rocket@gmail.com" https://www.nicovideo.jp/ranking/genre/all?rss=2.0&lang=ja-jp

# $ crontab -e
# 16 * * * * /home/vagrant/workspace/bot/niconico-ranking.sh
