start:
	@docker run -it -d --name btp2-monitor-mainnet2 -v ./data:/app/data -p 8102:8102 btp2-monitor-mainnet2
	@echo "Monitor started"

stop:
	@docker stop btp2-monitor-mainnet2 && docker rm btp2-monitor-mainnet2
	@echo "Monitor stopped"
