  <template>
  <div class="wripper">
    <Form :model="formItem" :label-width="80">
      <p style="margin-bottom: 15px">建筑特征</p>
      <Row>
        <Col span="6">
        <FormItem label="绿化率">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
        <Col span="6">
        <FormItem label="停车位">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
        <Col span="6">
        <FormItem label="层数">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
        <Col span="6">
        <FormItem label="容积率">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
      </Row>
      <p style="margin-bottom: 15px">邻里特征</p>
      <Row>
        <Col span="6">
        <FormItem label="学校">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
        <Col span="6">
        <FormItem label="医院">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
        <Col span="6">
        <FormItem label="车站">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
        <Col span="6">
        <FormItem label="商场">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
      </Row>
      <p style="margin-bottom: 15px">区位特征</p>
      <Row>
        <Col span="12">
        <FormItem label="区域影响">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="公交线个数">
          <Slider v-model="formItem.slider" :step="10" show-stops></Slider>
        </FormItem>
        </Col>
      </Row>
      <FormItem>
        <div style="text-align: center">
          <Button style="margin-right: 20px" type="primary">确定</Button>
          <Button>重置</Button>
        </div>
      </FormItem>
    </Form>
  </div>

</template><script>
export default {
    data() {
        return {
            formItem: {
                slider: 1
            }
        };
    },
    methods: {}
};
</script>