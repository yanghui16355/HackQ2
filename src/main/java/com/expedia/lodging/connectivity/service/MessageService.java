package com.expedia.lodging.connectivity.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.expedia.lodging.connectivity.model.MessageAggregator;
import com.expedia.lodging.connectivity.model.PartnerInfo;

public class MessageService {
	
	public List<PartnerInfo> getPartnerInfo(){
		List<PartnerInfo> partnerInfo = new ArrayList<PartnerInfo>();
		
		createParterInfo(partnerInfo);
		
		return partnerInfo;
	}
	
	
	private void createParterInfo(List<PartnerInfo> partnerInfo){
		MessageAggregator hs1 = new MessageAggregator("RQIn","Success",100,"Hilton","Polaris","Hilton");
		MessageAggregator hf1 = new MessageAggregator("RQIn","Fail",5,"Hilton","Polaris","Hilton");
		MessageAggregator hs2 = new MessageAggregator("RQOut","Success",100,"Hilton","Polaris","Hilton");
		MessageAggregator hf2 = new MessageAggregator("RQOut","Fail",3,"Hilton","Polaris","Hilton");
		MessageAggregator hs3 = new MessageAggregator("RSIn","Success",100,"Hilton","Polaris","Hilton");
		MessageAggregator hf3 = new MessageAggregator("RSIn","Fail",8,"Hilton","Polaris","Hilton");
		MessageAggregator hs4 = new MessageAggregator("RSOut","Success",100,"Hilton","Polaris","Hilton");
		MessageAggregator hf4 = new MessageAggregator("RSOut","Fail",10,"Hilton","Polaris","Hilton");
		
		PartnerInfo h = new PartnerInfo("Hilton");
		h.setRQInS(hs1);
		h.setRQInF(hf1);
		h.setRQOutS(hs2);
		h.setRQOutF(hf2);
		h.setRSInS(hs3);
		h.setRSInF(hf3);
		h.setRSOutS(hs4);
		h.setRSOutF(hf4);
		
		
		MessageAggregator ms1 = new MessageAggregator("RQIn","Success",100,"Marriott","Polaris","Marriott");
		MessageAggregator mf1 = new MessageAggregator("RQIn","Fail",5,"Marriott","Polaris","Marriott");
		MessageAggregator ms2 = new MessageAggregator("RQOut","Success",100,"Marriott","Polaris","Marriott");
		MessageAggregator mf2 = new MessageAggregator("RQOut","Fail",3,"Marriott","Polaris","Marriott");
		MessageAggregator ms3 = new MessageAggregator("RSIn","Success",100,"Marriott","Polaris","Marriott");
		MessageAggregator mf3 = new MessageAggregator("RSIn","Fail",8,"Marriott","Polaris","Marriott");
		MessageAggregator ms4 = new MessageAggregator("RSOut","Success",100,"Marriott","Polaris","Marriott");
		MessageAggregator mf4 = new MessageAggregator("RSOut","Fail",10,"Marriott","Polaris","Marriott");
		
		PartnerInfo m = new PartnerInfo("Marriott");
		m.setRQInS(ms1);
		m.setRQInF(mf1);
		m.setRQOutS(ms2);
		m.setRQOutF(mf2);
		m.setRSInS(ms3);
		m.setRSInF(mf3);
		m.setRSOutS(ms4);
		m.setRSOutF(mf4);
		
		partnerInfo.add(h);
		partnerInfo.add(m);
	}
}
