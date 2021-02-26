
<template>
  <div style="width: 100%;">
    <!-- TODO: 暂时默认 上下布局 -->
    <div
      class="form-item-components"
      :class="{'lr': formLayout.labelPosition === 'left'}"
      >
      <h1 v-show="showLabelTitle" class="label">{{ formItem.options.label }}</h1>
      
      <!-- 分割线 -->
      <vs-divider
        v-if="formItem.type === 'divider' && formItem.options.label"
      >
        {{ formItem.options.label }}
      </vs-divider>
      <vs-divider
        v-if="formItem.type === 'divider' && !formItem.options.label"
      />

      <!-- 文本输入框 -->
      <vs-input
        v-if="formItem.type === 'input'"
        :placeholder="formItem.options.placeholder"
        :disabled="formItem.options.disabled"
        v-model="formItem.options.defaultValue"
      />

      <!-- 计数器 -->
      <vs-input-number
        v-if="formItem.type === 'input-number'"
        :size="formItem.options.size"
        :step="formItem.options.step"
        :color="formItem.options.color"
        :min="formItem.options.min"
        :max="formItem.options.max"
        v-model="formItem.options.defaultValue"
        :disabled="formItem.options.disabled"
      />

      <!-- 文本域 -->
      <vs-textarea
        v-if="formItem.type === 'textarea'"
        :placeholder="formItem.options.placeholder"
        :rows="formItem.options.rows"
        :width="formItem.options.width"
        :counter="formItem.options.counter"
        v-model="formItem.options.defaultValue"
        :disabled="formItem.options.disabled"
      />

      <!-- 开关 -->
      <vs-switch
        v-if="formItem.type === 'switch'"
        v-model="formItem.options.defaultValue"
        :color="formItem.options.color"
        :disabled="formItem.options.disabled"
      >
        <span slot="on">{{ formItem.options.onText }}</span>
        <span slot="off">{{ formItem.options.offText }}</span>
      </vs-switch>

      <!-- 多选框 -->
      <ul
        class="checkbox-ul"
        v-if="formItem.type === 'checkbox'"
      >
        <li
          v-for="item in formItem.options.options"
          :key="item.value"
        >
          <vs-checkbox
            v-model="formItem.options.defaultValue"
            :vs-value="item"
            :disabled="formItem.options.disabled"
          >
            {{ item.label }}
          </vs-checkbox>
        </li>
      </ul>

      <!-- 单选框 -->
      <ul
        class="radio-ul"
        v-if="formItem.type === 'radio'"
      >
        <li
          v-for="item in formItem.options.options"
          :key="item.value"
        >
          <vs-radio
            v-model="formItem.options.defaultValue"
            :vs-value="item"
            :disabled="formItem.options.disabled"
          >
            {{ item.label }}
          </vs-radio>
        </li>
      </ul>

      <!-- 下拉选择框 单选 -->
      <vs-select
        v-if="formItem.type === 'select' && !formItem.options.multiple"
        :placeholder="formItem.options.placeholder"
        width="100%"
        v-model="formItem.options.singleValue"
        :disabled="formItem.options.disabled"
        >
        <vs-select-item :key="index" :value="item.value" :text="item.label" v-for="(item,index) in formItem.options.options" />
      </vs-select>
      <!-- 下拉选择框 多选 -->
      <vs-select
        v-if="formItem.type === 'select' && formItem.options.multiple"
        :placeholder="formItem.options.placeholder"
        width="100%"
        multiple
        v-model="formItem.options.multipleValue"
        :disabled="formItem.options.disabled"
        >
        <vs-select-item :key="index" :value="item.value" :text="item.label" v-for="(item,index) in formItem.options.options" />
      </vs-select>

      <!-- 日期选择器 -->
      <date-picker
        style="width: 100%;"
        v-if="formItem.type === 'datepicker'"
        :disabled="formItem.options.disabled"
        value-type="format"
        v-model="formItem.options.defaultValue"
      />

      <!-- 按钮 -->
      <vs-button
        v-if="formItem.type === 'button'"
        :type="formItem.options.type"
        :color="formItem.options.color"
        :size="formItem.options.size"
        :style="{'margin-left': `${formItem.options.left}%` }"
        :disabled="formItem.options.disabled"
      >
        {{ formItem.options.label }}
      </vs-button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FormNode',
  props: {
    formItem: {
      type: Object,
      required: true
    },
    formLayout: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 是不是显示 表单项标题
    showLabelTitle() {
      const blacks = ['button', 'grid', 'divider'];
      return blacks.findIndex(x => x === this.formItem.type) < 0;
    }
  }
}
</script>