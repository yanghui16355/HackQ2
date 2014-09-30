package com.expedia.lodging.connectivity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.expedia.lodging.connectivity.service.MessageService;

@Configuration
public class BeanConfig {
	
	@Bean
	public MessageService getMessageService(){
		MessageService ms = new MessageService();
		return ms;
	}
}
