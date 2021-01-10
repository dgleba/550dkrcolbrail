


# env vars are not working. don't use this.






define set0
  export nodeimg='node:14.15-slim'
  export proj=vue-eg-552cfab
  export devport=14332
endef


dev:
	$(call set0)
	docker run --rm -v "$${PWD}:/$$(basename `pwd`)" -w "/$$(basename `pwd`)" -p $$devport:8080 -it  $$nodeimg sh -c "yarn serve"
